//const { create, t, inform, exec, bundle, setParser} = require('ef.js');
import navigation_formation from './navigation_formation.eft'
import './index.less'
const navigation = new navigation_formation();
navigation.$mount({target:document.body,option:"append"});
const a = 0;