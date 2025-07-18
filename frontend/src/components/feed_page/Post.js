import CommentList from './Comment';
import { PostActionBar } from './ActionBar'; // must have {} for non-default exports
import React, { useState } from 'react';

/**
 * Post structure:
 * 
 * Header - author profile picture, author name, timestamp
 * Caption
 * Image
 * Icons bar - like/displike, comment, share
 *      comment button opens text input for new comment
 * Comments - preview first few comments and button to expand to see all comments
 */

function PostHeader({ userId, post }) {
    return (
        <div className="flex items-center gap-4">
            {/* Author profile picture */}
            <img
                src={post.author_pfp || "https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"}
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
            />
            {/* Info column (expands) */}
            <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 truncate">{post.author_name || "Author"}</div>
                <div className="text-sm text-gray-500">
                    {post.timestamp && (
                        <span>{new Date(post.timestamp).toLocaleString()}</span>
                    )}
                    {post.location && (
                        <span> &middot; {post.location}</span>
                    )}
                </div>
            </div>
            {/* Follow button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Follow
            </button>
        </div>
    );
}

function Post({ userId, post }) {

    return (
        <div className="post bg-white rounded-lg shadow-md p-6 mb-6">
            <PostHeader userId={userId} post={post} />
            <div className="post-body mb-4">
                <p className="text-gray-800 mb-2">{post.caption}</p>
                {post.image_url && (
                    <img
                        src={post.image_url}
                        alt="Post"
                        className="w-full max-h-96 object-cover rounded-md mb-3"
                    />
                )}
            </div>
            <PostActionBar userId={userId} post={post} />
            <CommentList userId={userId} post={post} />
        </div>
    );
}

export default Post;
