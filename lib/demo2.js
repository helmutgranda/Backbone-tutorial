(function() {
  var $, ListView, listView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $ = jQuery;
  ListView = (function() {
    function ListView() {
      this.addItem = __bind(this.addItem, this);;
      this.render = __bind(this.render, this);;      ListView.__super__.constructor.apply(this, arguments);
    }
    __extends(ListView, Backbone.View);
    ListView.prototype.el = $('body');
    ListView.prototype.events = {
      'click button#add': 'addItem'
    };
    ListView.prototype.initialize = function() {
      this.counter = 0;
      return this.render();
    };
    ListView.prototype.render = function() {
      this.el.append("<button id='add'>Add item</button>");
      return this.el.append("<ul></ul>");
    };
    ListView.prototype.addItem = function() {
      this.counter++;
      return $('ul', this.el).append("<li>hw" + this.counter + "</li>");
    };
    return ListView;
  })();
  listView = new ListView;
}).call(this);
