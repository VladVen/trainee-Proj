import Box from "@mui/material/Box";
import {commonCommentsType} from "../../redux/CommonDataTypes/types";
import React from "react";

type CommentType = {
    comment: commonCommentsType
}

export const Comment: React.FC<CommentType> = ({comment}) => {
    return <Box>
        {comment.text}
    </Box>
}