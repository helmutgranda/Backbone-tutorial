$ = jQuery


class ListView extends Backbone.View

    el: $('body')

    initialize: ->
        @render()

    render: =>
        $(@el).append("<ul><li>Hello World</li></ul>")


listView = new ListView