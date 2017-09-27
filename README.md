Ext.ux.slider.Multi.Tips
-------------------------------------

Overrides the Sencha ExtJS mulstislider component to show persistent tips over the thumbs

**Source at GitHub**

[https://github.com/wencywww/Ext.ux.slider.Multi.Tips](https://github.com/wencywww/Ext.ux.slider.Multi.Tips)



**Demos**

[Sencha's Fiddle: https://fiddle.sencha.com/#fiddle/202n](https://fiddle.sencha.com/#fiddle/202n)


**Features:**

  * Adds a simple override to the ExtJS multislider form field so that a visible tooltips are shown over the thumbs
  * Tips are destroyed and recreated on slider change/resize
  * Works also for the single slider (as it extends the multislider)
  * Configurable prefix/suffix in the tips
  * Requires ExtJS version 6.2.x / 6.5.x , does not work with lower versions of the framework

    
**Additional config options**

  * **persistTips**, boolean, if true - activates the override
  * **tipPrefix**, string to be added before the value in the tip (can be ommited if not needed)
  * **tipPrefix**, string to be added after the value in the tip (can be ommited if not needed)

  
**Usage**

  * Include the `src/multisliderOverride.js` file (Ext must be included prior to this)
  * Instantiate the slider/multislider, for example 
  ```javascript
  var mySlider = Ext.create('Ext.slider.Multi', {useTips: false, persistTips: true, tipPrefix: 'EUR ', renderTo: Ext.getBody()});
  ```
  
  

**List of Changes**

  * **2017-05-23**, initial commit
