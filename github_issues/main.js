$(document).ready(function() {
	
    var $sQ = $('#searchQuery');

    $('#username-form').submit(function() {
        $('.spinner').show();
        username = $('.username').val();
        if(username == '' || !username) {
            return;
        }
        $(this).prop('disabled', true);
        repolink = 'https://api.github.com/users/' + username + '/repos';
        repoList = getRepos(repolink, function() {
            $('.lightbox').removeClass('active');
            $('.spinner').hide();
            $('#searchQuery').focus();
        });
        return false;
    });
    
    $sQ.keyup(function(event) {
        showSuggestions($(this));
    });
    
    $sQ.focus(function() {
    	showSuggestions($(this));
    });

    $sQ.blur(function() {
        hideSuggestions($(this));
    });
});

function getRepos(repolink, callback) {
    var repoList = [];
    getReposPage(repolink, 1, repoList, callback);
    return repoList;
}

function getReposPage(repolink, pageNo, repoList, callback) {
    $.ajax(repolink + '?per_page=100&page=' + pageNo).then(function(data) {
        if(data.length == 0) {
            callback();
            return;
        }
        data.forEach(function(v) {
            repoList.push(v);
        });
        getReposPage(repolink, pageNo + 1, repoList, callback);
        callback();
    });
}

function formatDateISO(date) {
    var m = moment(date);
    return m.utc().format();
}

function formatDateHuman(date) {
    var m = moment(date);
    return m.format('DD MMM YYYY');
}

function getIssues(sinceDate, callback) {
    var issuesUrl = 'https://api.github.com/repos/' + username + '/' + repoName + '/issues?since=' + formatDateISO(sinceDate);
    $.ajax(issuesUrl).then(function(data) {
        repoIssuesList = data;
        
        callback();
    });
}

function showIssues() {
    var $issuesDiv = $('.issues');
    var $issuesHeader = $('#header');

    $('.issue-details').removeClass('active');
    $('#counter').removeClass('active');
    $('.user-details').removeClass('active');
    $('.help-text').removeClass('active');
    $issuesHeader.html('<strong>' + repoName + '</strong>' + ' - Issues for ' + todayDateStr);

    $issuesDiv.addClass('active');
    if(repoIssuesList.length === 0) {
        $issuesDiv.html('<div class=".no-issues">There are no open issues in this repository.</div>');
    } else {
        var issueItemsHtml = '';
        for(var i = 0; i < repoIssuesList.length; i++) {
            var issueObj = repoIssuesList[i];
            var issueItemHtml = '<div class="issue" data-issue-id="' + issueObj.id + '">' + issueObj.title + '</div>';
            issueItemsHtml += issueItemHtml;
        }
        $issuesDiv.html(issueItemsHtml);
        $('.issue').click(function () {
            $clickedIssue = $(this);
            
            var issueObj = getIssueDetails(repoIssuesList, $clickedIssue);
            var counter = getIssueCounter(issueObj.id);
            counter++;
            setIssueCounter(issueObj.id, counter);
            showIssueDetails(issueObj, counter);
        });
    }
}

function getIssueCounter(issueId) {
    var issueCounter = localStorage.getItem("issue-counter-" + issueId);
    
    if(issueCounter == null) {
        return 0;
    }
    return parseInt(issueCounter);
}

function setIssueCounter(issueId, issueCounter) {
    
    localStorage.setItem("issue-counter-" + issueId, issueCounter);
}

function getIssueDetails(repoIssuesList, $clickedIssue) {
    var issueId = $clickedIssue.attr('data-issue-id')
    for(var i = 0; i < repoIssuesList.length; i++) {
        var issueObj = repoIssuesList[i];
        if(issueObj.id == issueId) break;
    }
    
    return issueObj;
}

function showIssueDetails(issueObj, counter) {
    $('.user-details').removeClass('active');
    $('.issues').removeClass('active');
    $('.help-text').removeClass('active');
    $('#counter').addClass('active').html(counter);

    issueLabelsHtml = '<span class="issue-labels">';
    issueDescHtml = '<div class="issue-desc">' + issueObj.body + '</div>';
    for (var i = 0; i < issueObj.labels.length; i++) {
        issueLabelHtml = '<span class="issue-label" style="background-color: #' 
        + issueObj.labels[i].color + ';">' + issueObj.labels[i].name + '</span>';
        issueLabelsHtml += issueLabelHtml;
    }
    issueLabelsHtml += '</span>';
    issueTitleHtml = '<span class="issue-title">' + issueObj.title + '</span>';
    issueUserHtml = '<img class="issue-user-img" src="' + issueObj.user.avatar_url + '" />';
    backToIssuesHtml = '<span id="back-to-issues" class="chevron left back-link"></span>'
    $('#header').html(backToIssuesHtml + issueTitleHtml + issueLabelsHtml);
    $('#back-to-issues').click(function() {
        showIssues();
    });
    $('.issue-details').html(issueUserHtml + issueDescHtml).attr('data-issue-id', issueObj.id).addClass('active');
    $('.issue-user-img').click(function() {
        userDataList = getUserDetails(issueObj, function(){
            showUserDetails(issueObj, counter);
        });
    });
}

function getUserDetails(issueObj, callback) {
    var userUrl = issueObj.user.url;
    $.ajax(userUrl).then(function(data) {
        userDataList = data;
        
        callback();
    });
}

function showUserDetails(issueObj, counter) {
    $('.issue-details').removeClass('active');
    $('.issues').removeClass('active');
    $('#counter').removeClass('active');
    $('.help-text').removeClass('active');
    $('.user-details').addClass('active');

    backToIssueDetailsHtml = '<span id="back-to-issue-details" class="chevron left back-link"></span>'
    $('#header').html(backToIssueDetailsHtml + '<strong class="issue-title">' + userDataList.name + '</strong>');
    userImageHtml = '<img class="user-img" src="' + userDataList.avatar_url + '" />';
    userGithubLinkHtml = '<a target="_blank" class="github-link" href="' + userDataList.html_url + '">' + userDataList.html_url + '</a>';
    $('.user-details').html(userImageHtml + userGithubLinkHtml).addClass('active');
    $('#back-to-issue-details').click(function() {
        showIssueDetails(issueObj, counter);
    });
}

function showSuggestions($searchQuery) {

	var minLength = $searchQuery.attr('data-min-len');
    var $suggestionsDiv = $searchQuery.parent().find('.search-suggestions');
    var searchValue = $searchQuery.val();
    
    if (searchValue.length >= minLength) {
       	getSuggestions(searchValue, $suggestionsDiv);
    }
    else {
       	hideSuggestions($suggestionsDiv);
    }
}

function hideSuggestions($searchQuery) {
	var $suggestionsDiv = $searchQuery.parent().find('.search-suggestions');
   	$suggestionsDiv.removeClass('active');
}

function getSuggestions(queryString, $suggestionsDiv) {
	results = getResults(queryString);
    showResults(results, $suggestionsDiv, queryString);
}

function getResults(queryString) {
	results = [];
    if(!repoList) return null;
	for (var i = 0; i < repoList.length; i++) {
    	var repo = repoList[i];
        var repoName = repo.name;
        var repoId = repo.id;
    	
        if (repoName.toLowerCase().includes(queryString.toLowerCase())) {
        	var repoObj = {name: repoName, id: repoId};
        	results.push(repoObj);
        }
    }
    return results;
}

function buildSearchSuggestionItem(resultObj, queryString) {
    formattedName = resultObj.name.replace(RegExp(queryString, 'ig'), function(match) {
        return '<b>' + match + '</b>';
    });
    return '<div class="search-suggestions-item" data-id="' + resultObj.id + '" data-name="' + resultObj.name + '">' + formattedName + '</div>';
}

function showResults(resultsArray, $suggestionsDiv, queryString) {
	if (resultsArray.length === 0 || !resultsArray) {
    	$suggestionsDiv.removeClass('active');
    }
    else {
    	$suggestionsDiv.addClass('active');
        resultHtml = '';
        
        for (var i = 0; i < resultsArray.length; i++) {
        	resultObj = resultsArray[i];
            resultHtml += buildSearchSuggestionItem(resultObj, queryString);
        }
        $suggestionsDiv.html(resultHtml);
        $suggestionsDiv.find('.search-suggestions-item').on('mousedown', function() {
            repoName = $(this).attr('data-name');
            $('#searchQuery').val(repoName);
            var sinceDate = new Date();
            var todayDate = new Date();
            todayDateStr = formatDateHuman(todayDate);
            sinceDate.setDate(sinceDate.getDate() - 1);
            repoIssuesList = getIssues(sinceDate, function() {
                showIssues();
            });
        });
    }
}