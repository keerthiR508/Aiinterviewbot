const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_dj8hbq4ch,
    api_key: process.env.CLOUDINARY_364336461475812,
    api_secret: process.env.CLOUDINARY_NZ3_Tn4xX_oqy5TlwoBO_xOnf80,
});

module.exports = cloudinary;