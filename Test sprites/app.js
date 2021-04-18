App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
		wade.loadScene('main_scene.wsc', true, function()
        {
            // the scene has been loaded, do something here

        });
	};
};
