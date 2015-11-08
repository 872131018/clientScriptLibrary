//example function call
buttonGroupFromList(buttonsDataObject);

//information required for function call
var buttonsDataObject = 
{
	//list the buttons that you want to make
	'buttonList': 
	{
		'login': 'Sign In!',
		'profile': 'Profile',
		'gamercard': 'Gamercard',
		'presence': 'Presence',
		'friends': 'Friends',
		'activity': 'Activity',
		'xbox360Games': 'Xbox360Games'
	},
	//pass other options, these are required!
	'options':
	{
		'appendToElementId': 'gamerDashboard',
		'addClassDisabled': 'true'

	}

};
function buttonGroupFromList(dataObject)
{
	//seperate the contructor object
	var buttonList = dataObject['buttonList'];
	var buttonOptions = dataObject['options'];

	//make a button for each passed object
	var buttonString = '';
	for(var button in dataList)
	{
		if(buttonOptions['addClassDisabled'])
		{
			buttonString = '<input type="button" id="'+button+'Button" value="'+buttonList[button]+'" class="btn disabled">';
		}
		else
		{
			buttonString = '<input type="button" id="'+button+'Button" value="'+buttonList[button]+'" class="btn">';
		}
		var element = '#'+buttonOptions['appendToElementId'];
		$(element).append(buttonString);
	}
}