game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("title-screen")), -10);
                me.input.bindKey(me.input.KEY.ENTER, "start");
                
                me.game.world.addChild(new (me.Renderable.extend  ({
                    init: function(){
                        this._super(me.Renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.height]);
                        this.font = new me.Font("Impact", 46, "Green");
                    },
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "", 450, 130);
                        this.font.draw(renderer.getContext(), "Press ENTER to play", 350, 270);
                    }
                    
                })));
      
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keycode, edge){
                  if(action === "start"){
                      me.state.change(me.state.PLAY);
                  }  
                });
            },
	
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ENTER);
                me.event.unsubscribe(this.handler);
	}
});
