var $, Item, ItemView, List, ListView, listView,
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

$ = jQuery;

Item = (function(_super) {

  __extends(Item, _super);

  function Item() {
    Item.__super__.constructor.apply(this, arguments);
  }

  Item.prototype.defaults = {
    part1: "Hello",
    part2: "World"
  };

  return Item;

})(Backbone.Model);

List = (function(_super) {

  __extends(List, _super);

  function List() {
    List.__super__.constructor.apply(this, arguments);
  }

  List.prototype.model = Item;

  return List;

})(Backbone.Collection);

ItemView = (function(_super) {

  __extends(ItemView, _super);

  function ItemView() {
    this.render = __bind(this.render, this);
    ItemView.__super__.constructor.apply(this, arguments);
  }

  ItemView.prototype.tagName = 'li';

  ItemView.prototype.initialize = function() {};

  ItemView.prototype.render = function() {
    $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
    return this;
  };

  return ItemView;

})(Backbone.View);

ListView = (function(_super) {

  __extends(ListView, _super);

  function ListView() {
    this.appendItem = __bind(this.appendItem, this);
    this.addItem = __bind(this.addItem, this);
    this.render = __bind(this.render, this);
    ListView.__super__.constructor.apply(this, arguments);
  }

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
    $(this.el).append('<button id="add">Add item</button>');
    $(this.el).append('<ul></ul>');
    return _(this.collection.models).each((function(item) {
      return self.appendItem(item);
    }), this);
  };

  ListView.prototype.addItem = function() {
    var item;
    this.counter++;
    item = new Item;
    item.set({
      part2: item.get('part2') + ' ' + this.counter
    });
    return this.collection.add(item);
  };

  ListView.prototype.appendItem = function(item) {
    var itemView;
    itemView = new ItemView({
      model: item
    });
    return $('ul', this.el).append(itemView.render().el);
  };

  return ListView;

})(Backbone.View);

listView = new ListView;
