/* eslint-disable import/no-extraneous-dependencies */

import { createHyperscript } from 'slate-hyperscript';

/**
 * Define a hyperscript.
 *
 * @type {Function}
 */

const h = createHyperscript({
    blocks: {
        line: 'line',
        paragraph: 'paragraph',
        quote: 'quote',
        code: 'code',
        list: 'list',
        item: 'item',
        image: {
            type: 'image',
            isVoid: true
        },
        heading: 'heading'
    },
    inlines: {
        link: 'link',
        hashtag: 'hashtag',
        comment: 'comment',
        emoji: {
            type: 'emoji',
            isVoid: true
        }
    },
    marks: {
        b: 'bold',
        i: 'italic',
        u: 'underline',
        fontSize: 'font-size'
    }
});

/**
 * Export.
 *
 * @type {Function}
 */

export default h;
