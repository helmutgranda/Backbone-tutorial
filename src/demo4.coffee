$ = jQuery

class Item extends Backbone.Model
    defaults:
        part1: "Hello"
        part2: "World"


class List extends Backbone.Collection
    model:Item


class ItemView extends Backbone.View
    tagName: 'li'
    initialize: ->

    render: =>
        $(@el).html '<span>' + @model.get('part1') + ' ' + @model.get('part2') + '</span>'
        @


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
        $(@el).append '<button id="add">Add item</button>'
        $(@el).append '<ul></ul>'
        _(@collection.models).each ( (item) ->  self.appendItem item), @            

    addItem: =>
        @counter++
        item = new Item
        item.set {part2: item.get('part2') + ' ' + @counter}
        @collection.add(item)        

    appendItem: (item) =>
        itemView = new ItemView
            model:item
        $('ul', @el).append itemView.render().el


listView = new ListView