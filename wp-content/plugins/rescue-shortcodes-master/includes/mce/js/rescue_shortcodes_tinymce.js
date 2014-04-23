
// For all WP versions
function rescue_on_click(id) {
    // Selected content
    var mceSelected = tinyMCE.activeEditor.selection.getContent();

    // Add highlighted content inside the shortcode when possible
    if ( mceSelected ) {
        var rescueDummyContent = mceSelected;
    } else {
        var rescueDummyContent = 'Sample Content';
    }


    // Boxes
    if(id == "blueBox") {
        tinyMCE.activeEditor.selection.setContent('[rescue_box color="blue" text_align="left" width="100%" float="none"]<br />' + rescueDummyContent + '<br />[/rescue_box]');
    }
    if(id == "grayBox") {
        tinyMCE.activeEditor.selection.setContent('[rescue_box color="gray" text_align="left" width="100%" float="none"]<br />' + rescueDummyContent + '<br />[/rescue_box]');
    }
    if(id == "greenBox") {
        tinyMCE.activeEditor.selection.setContent('[rescue_box color="green" text_align="left" width="100%" float="none"]<br />' + rescueDummyContent + '<br />[/rescue_box]');
    }
    if(id == "redBox") {
        tinyMCE.activeEditor.selection.setContent('[rescue_box color="red" text_align="left" width="100%" float="none"]<br />' + rescueDummyContent + '<br />[/rescue_box]');
    }
    if(id == "yellowBox") {
        tinyMCE.activeEditor.selection.setContent('[rescue_box color="yellow" text_align="left" width="100%" float="none"]<br />' + rescueDummyContent + '<br />[/rescue_box]');
    }



    // Button
    if(id == "button") {
        tinyMCE.activeEditor.selection.setContent('[rescue_button color="blue" url="http://rescuethemes.com" title="Visit Site" target="blank" class="right" border_radius=""]' + rescueDummyContent + '[/rescue_button]');
    }


    // Clear Floats
    if(id == "clear") {
        tinyMCE.activeEditor.selection.setContent('[rescue_clear_floats]');
    }


    // Icon
    if(id == "icon") {
        tinyMCE.activeEditor.selection.setContent('[icon type="cloud" size="3x" pull="left" color="#cccccc"]');
    }




    // Columns
    if(id == "half") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="one-half" position="first"]<br />' + rescueDummyContent + '<br />[/rescue_column]');
    }
    if(id == "third") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="one-third" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "fourth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="one-fourth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "fifth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="one-fifth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "sixth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="one-sixth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }


    if(id == "twothird") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="two-third" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "threefourth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="three-fourth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "twofifth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="two-fifth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }
    if(id == "threefifth") {
        tinyMCE.activeEditor.selection.setContent('[rescue_column size="three-fifth" position="first"]' + rescueDummyContent + '[/rescue_column]');
    }




    // Google Map
    if(id == "googlemap") {
        tinyMCE.activeEditor.selection.setContent('[rescue_googlemap title="Rescue Themes Offices" location="5046 S Greenwood Ave, Chicago, IL 60615" zoom="14" height=250]');
    }


    // Highlight
    if(id == "blueHighlight") {
        tinyMCE.activeEditor.selection.setContent('[rescue_highlight color="blue"]' + rescueDummyContent + '[/rescue_highlight]');
    }
    if(id == "grayHighlight") {
        tinyMCE.activeEditor.selection.setContent('[rescue_highlight color="gray"]' + rescueDummyContent + '[/rescue_highlight]');
    }
    if(id == "greenHighlight") {
        tinyMCE.activeEditor.selection.setContent('[rescue_highlight color="green"]' + rescueDummyContent + '[/rescue_highlight]');
    }
    if(id == "redHighlight") {
        tinyMCE.activeEditor.selection.setContent('[rescue_highlight color="red"]' + rescueDummyContent + '[/rescue_highlight]');
    }
    if(id == "yellowHighlight") {
        tinyMCE.activeEditor.selection.setContent('[rescue_highlight color="yellow"]' + rescueDummyContent + '[/rescue_highlight]');
    }


    //Spacing
    if(id == "spacing") {
        tinyMCE.activeEditor.selection.setContent('[rescue_spacing size="40px"]');
    }



    //General Tabs
    if(id == "tabs") {
        tinyMCE.activeEditor.selection.setContent('[rescue_tabgroup]<br />[rescue_tab title="First Tab"]<br />First tab content<br />[/rescue_tab]<br />[rescue_tab title="Second Tab"]<br />Second Tab Content.<br />[/rescue_tab]<br />[/rescue_tabgroup]');
    }

    //Donation Tabs
    if(id == "donationtabs") {
        tinyMCE.activeEditor.selection.setContent('[rescue_donation_tabgroup group_title="Help Us Reach our Goal"]<br />[rescue_donation_tab title="Total"]<br />Example Fundraiser<br />[rescue_progressbar title="Example" percentage="75" color="#f1c40f"]<br />Example Fundraiser<br />[rescue_progressbar title="Example" percentage="45" color="#1abc9c"]<br />[/rescue_donation_tab]<br />[rescue_donation_tab title="Goal"]<br />Second tab content. You can enter any text that you would like here and it will be displayed within the second tab content.<br />[rescue_clear_floats]<br />[rescue_button color="black" url="http://rescuethemes.com" title="Visit Site" target="blank" class="right" border_radius=""]Sample Content[/rescue_button]<br />[/rescue_donation_tab]<br />[rescue_donation_tab title="Donate"]<br />Third tab content. You can enter any text that you would like here and it will be displayed within the third tab content<br />[rescue_button color="blue" url="http://rescuethemes.com" title="Visit Site" target="blank" class="right" border_radius=""]Sample Content[/rescue_button]<br />[/rescue_donation_tab]<br />[/rescue_donation_tabgroup]');
    }


    //Toggle
    if(id == "toggle") {
        tinyMCE.activeEditor.selection.setContent('[rescue_toggle title="This Is Your Toggle Title"]' + rescueDummyContent + '[/rescue_toggle]');
    }


    return false;
}

// For WP 3.9+
function rescue_render_item(parent_item, title, id) {
    var item = {
        'text': title,
        onclick: function(){ rescue_on_click(id); }
    };
    parent_item.push(item);
}

// For WP 3.9+
function rescue_get_menu() {
    var menu = [
        {
            text: 'Rescue Shortcodes',
            classes: 'menu-item-title',
            disabled: true,
        },
        { text: 'Columns' },
        { text: 'Elements' },
        { text: 'Boxes' },
        { text: 'Highlights' }
    ];

    // Columns
    var c = menu[1].menu = [];
    rescue_render_item( c, "One Half", "half" );
    rescue_render_item( c, "One Third", "third" );
    rescue_render_item( c, "One Fourth", "fourth" );
    rescue_render_item( c, "One Fifth", "fifth" );
    rescue_render_item( c, "One Sixth", "sixth" )
    // -- Separator --
    rescue_render_item( c, "Two Thirds", "twothird" );
    rescue_render_item( c, "Three Fourths", "threefourth" );
    rescue_render_item( c, "Two Fifths", "twofifth" );
    rescue_render_item( c, "Three Fifths", "threefifth" );

    // Elements
    var c = menu[2].menu = [];
    rescue_render_item( c, "Button", "button" );
    rescue_render_item( c, "Google Map", "googlemap" );
    rescue_render_item( c, "Tabs", "tabs" );
    rescue_render_item( c, "Donation Tabs", "donationtabs" );
    rescue_render_item( c, "Toggle", "toggle" );
    rescue_render_item( c, "Spacing", "spacing" );
    rescue_render_item( c, "Clear Floats", "clear" );
    rescue_render_item( c, "Icon", "icon" );

    // Boxes
    var c = menu[3].menu = [];
    rescue_render_item( c, "Blue", "blueBox" );
    rescue_render_item( c, "Gray", "grayBox" );
    rescue_render_item( c, "Green", "greenBox" );
    rescue_render_item( c, "Red", "redBox" );
    rescue_render_item( c, "Yellow", "yellowBox" );

    // Highlights
    var c = menu[4].menu = [];
    rescue_render_item( c, "Blue", "blueHighlight" );
    rescue_render_item( c, "Gray", "grayHighlight" );
    rescue_render_item( c, "Green", "greenHighlight" );
    rescue_render_item( c, "Red", "redHighlight" );
    rescue_render_item( c, "Yellow", "yellowHighlight" );

    return menu;
}

// For WP 3.9+
function rescue_init_wp39() {
    tinymce.PluginManager.add('rescue_shortcodes', function( editor, url ) {
        if (typeof tinymce.plugins == 'undefined') tinymce.plugins = {};
        if (typeof tinymce.plugins.rescueShortcodeMce == 'undefined')
          tinymce.plugins.rescueShortcodeMce = {};
        tinymce.plugins.rescueShortcodeMce.theurl = url;
        menu = rescue_get_menu();
        editor.addButton( 'rescue_shortcodes_button', {
            type: 'splitbutton',
            style: 'background: url(' + tinymce.plugins.rescueShortcodeMce.theurl + '/images/shortcodes.png' + ') no-repeat 3px 2px;',
            //image: tinymce.plugins.rescueShortcodeMce.theurl + '/images/shortcodes.png',
            'menu': menu
        });
    });
}

// For WP 3.8 and lower
function rescue_init_wp38() {
    tinymce.create('tinymce.plugins.rescueShortcodeMce', {
        init : function(ed, url){
            tinymce.plugins.rescueShortcodeMce.theurl = url;
        },
        createControl : function(btn, e) {
            if ( btn == "rescue_shortcodes_button" ) {
                var a = this;    
                var btn = e.createSplitButton('rescue_button', {
                    title: "Insert Shortcode",
                    image: tinymce.plugins.rescueShortcodeMce.theurl +"/images/shortcodes.png",
                    icons: false,
                });
                btn.onRenderMenu.add(function (c, b) {
                    
                    b.add({title : 'Rescue Shortcodes', 'class' : 'mceMenuItemTitle'}).setDisabled(1);
                    
                    
                    // Columns
                    c = b.addMenu({title:"Columns"});
                    
                        a.render( c, "One Half", "half" );
                        a.render( c, "One Third", "third" );
                        a.render( c, "One Fourth", "fourth" );
                        a.render( c, "One Fifth", "fifth" );
                        a.render( c, "One Sixth", "sixth" )
                        
                        c.addSeparator();        
                                
                        a.render( c, "Two Thirds", "twothird" );
                        a.render( c, "Three Fourths", "threefourth" );
                        a.render( c, "Two Fifths", "twofifth" );
                        a.render( c, "Three Fifths", "threefifth" );
                    
                    b.addSeparator();
                    
                    
                    // Elements
                    c = b.addMenu({title:"Elements"});
                                    
                        a.render( c, "Button", "button" );
                        a.render( c, "Google Map", "googlemap" );
                        a.render( c, "Tabs", "tabs" );
                        a.render( c, "Donation Tabs", "donationtabs" );
                        a.render( c, "Toggle", "toggle" );
                        a.render( c, "Spacing", "spacing" );
                        a.render( c, "Clear Floats", "clear" );
                        a.render( c, "Icon", "icon" );
                    
                    b.addSeparator();
                    
                    // Boxes
                    c = b.addMenu({title:"Boxes"});
                    
                        a.render( c, "Blue", "blueBox" );
                        a.render( c, "Gray", "grayBox" );
                        a.render( c, "Green", "greenBox" );
                        a.render( c, "Red", "redBox" );
                        a.render( c, "Yellow", "yellowBox" );
                        
                    b.addSeparator();
                    
                    // Highlights
                    c = b.addMenu({title:"Highlights"});
                    
                        a.render( c, "Blue", "blueHighlight" );
                        a.render( c, "Gray", "grayHighlight" );
                        a.render( c, "Green", "greenHighlight" );
                        a.render( c, "Red", "redHighlight" );
                        a.render( c, "Yellow", "yellowHighlight" );
                        
                    
                    
                });
                
              return btn;
            }
            return null;               
        },
        render : function(ed, title, id) {
            ed.add({
                'title': title,
                onclick: function () { rescue_on_click(id); }
            })
        }
    
    });
    tinymce.PluginManager.add("rescue_shortcodes", tinymce.plugins.rescueShortcodeMce);
}

(function(){
  var parts = rescue_wp_version.split('.');
  if ((parts[0] > 3) || ((parts[0] == 3) && (parts[1] >= 9))) {
    rescue_init_wp39();
  } else {
    rescue_init_wp38();
  }
})();

