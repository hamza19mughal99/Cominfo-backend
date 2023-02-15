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

const DeleteIframe = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedIframe = await Iframe.findByIdAndDelete(id);
        if (deletedIframe) {
            res.status(200).json({
                message: 'Iframe deleted successfully',
                deletedIframe: {
                    _id: deletedIframe._id,
                    urlLink: deletedIframe.urlLink,
                },
            });
        } else {
            res.status(404).json({
                message: 'Iframe not found',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Iframe deletion failed',
        });
    }
});

export { RegisterIframe, GetIframes, DeleteIframe }