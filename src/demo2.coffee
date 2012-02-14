$ = jQuery
class ListView extends Backbone.View
    
    el: $('body')
    
    events:
        'click button#add':'addItem'

    initialize: ->
        @counter = 0
        @.render()

    render: =>
        @el.append("<button id='add'>Add item</button>")
        @el.append("<ul></ul>")

    addItem: =>
        @counter++
        $('ul', @el).append("<li>hw" + @counter + "</li>")

listView = new ListView