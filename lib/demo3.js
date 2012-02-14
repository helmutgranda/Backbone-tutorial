(function() {
  var $, Item, List, ListView, listView;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  Item = (function() {
    function Item() {
      Item.__super__.constructor.apply(this, arguments);
    }
    __extends(Item, Backbone.Model);
    Item.prototype.defaults = {
      part1: "h",
      part2: "w"
    };
    return Item;
  })();
  List = (function() {
    function List() {
      List.__super__.constructor.apply(this, arguments);
    }
    __extends(List, Backbone.Collection);
    List.prototype.model = Item;
    return List;
  })();
  ListView = (function() {
    function ListView() {
      this.appendItem = __bind(this.appendItem, this);;
      this.addItem = __bind(this.addItem, this);;
      this.render = __bind(this.render, this);;      ListView.__super__.constructor.apply(this, arguments);
    }
    __extends(ListView, Backbone.View);
    ListView.prototype.el = $('body');
    ListView.prototype.events = {
      'click button#add': 'addItem'
    };
    ListView.prototype.initialize = function() {
      this.collection = new List;
      this.collection.bind('add', this.appendItem);
      this.counter = 0;
      return this.render();
    };
    ListView.prototype.render = function() {
      var self;
      self = this;
      this.el.append("<button id='add'>Add item</button>");
      return this.el.append("<ul></ul>");
    };
    ListView.prototype.addItem = function() {
      var item;
      this.counter++;
      item = new Item;
      item.set({
        part2: item.get('part2') + this.counter
      });
      return this.collection.add(item);
    };
    ListView.prototype.appendItem = function(item) {
      return $('ul', this.el).append("<li>" + item.get('part1') + item.get('part2') + "</li>");
    };
    return ListView;
  })();
  listView = new ListView;
}).call(this);
