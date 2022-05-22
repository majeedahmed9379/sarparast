const express = require('express');
var router = express.Router();
var Parent = require('../models/parent');
var Child = require('../models/child');

router.get('/index', function (req, res){
    res.send("Parents router");
})
router.post('/newparent', async function(req, res) {
    
    const parent = new Parent({
        name:req.body.name,
        username:req.body.username,
        password : req.body.password,
        children:[]
    });

    await parent.save();
    res.send(parent);
});

router.post('/addchild', async function (req, res){
    const child = new Child({
        name: req.body.name,
        username: req.body.username,
        parent: req.body.parent_id
    });
    await child.save();
    console.log("Child created", child);
    const updateParent = await Parent.findById(req.body.parent_id);
    await updateParent.children.push(child.id);
    await updateParent.save();
    // await updateParent.children.push(child.id);
    res.send(updateParent.children);

})
router.get('/children/:parent_id', async function (req, res){
    var parent = await Parent.findById(req.params.parent_id).populate(
        'children'
    );
    console.log(parent);
    res.send(parent);
})

module.exports = router;