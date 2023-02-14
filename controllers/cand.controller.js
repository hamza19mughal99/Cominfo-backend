import asyncHandler from "express-async-handler";
import Iframe from "../model/candidate.js";


const GetIframes = asyncHandler(async (req, res) => {
    const iframes = await Iframe.find({});

    res.status(200).json({
        count: iframes.length,
        iframes: iframes.map(iframe => {
            return {
                _id: iframe._id,
                urlLink: iframe.urlLink,
            };
        }),
    });
});


const RegisterIframe = asyncHandler(async (req, res) => {

    const { urlLink } = req.body;
    // const iframeExist = await Iframe.findOne({ urlLink })

    // if (iframeExist) {
    //     res.status(404);
    //     throw new Error('Iframe already exist')
    // }

    try {
        const iframe = await Iframe.create({
            urlLink
        });

        if (iframe) {
            res.status(201).json({
                _id: iframe._id,
                urlLink: iframe.urlLink,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            message: 'Iframe creation failed'
        });
    }

})

export { RegisterIframe, GetIframes }