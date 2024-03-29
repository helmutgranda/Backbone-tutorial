$ = jQuery

class Item extends Backbone.Model
    defaults:
        part1: "Hello"
        part2: "World"

class List extends Backbone.Collection
    model:Item

class ListView extends Backbone.View
    
    el: $('body')
    
    events:
        'click button#add':'addItem'

    initialize: ->
        @collection = new List
        @collection.bind 'add', @appendItem
        @counter = 0
        @render()

    render: =>
        self = @
        $(@el).append "<button id='add'>Add item</button>"
        $(@el).append "<ul></ul>"

    addItem: =>
        @counter++
        item = new Item
        item.set {part2: item.get('part2') + " " + this.counter}
        @collection.add(item)
        

    appendItem: (item) =>
        $('ul', @el).append("<li>" + item.get('part1')  + " " + item.get('part2') + "</li>")

listView = new ListView