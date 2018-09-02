import User from '../user';
import Processer from './core/processor';

// because we are using a custom trimmed version of jquery
var $ = require('../external/jquery.min.js');
window.jQuery = $;
window.$ = $;

var uObj = new User()
var pObj = new Processer(uObj);

$("#app").html(pObj.view());