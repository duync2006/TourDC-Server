const { model } = require("mongoose");
const { Album, User}  = require("../model/model")

const router = require("express").Router();

const albumController = {
  addAlbum: async(req, res) => {
    res.status(200).json(req.body);
    try {
      const newAlbum = new Album(req.body);
      const saveAlbum = await newAlbum.save();
      if(req.body.user) {
        const user = User.findById(req.body.user);
        await user.updateOne({$push: {users: saveAlbum._id} });
      }
      res.status(200).json(saveAlbum);
    } catch (error) {
      res.status(500).json(err)
    }
  }
}

module.exports = albumController;