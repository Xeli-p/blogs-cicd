const mongoose = require('mongoose')

const dummy = (blogs) => {
    return 1
}

const sum = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    return blogs.reduce(reducer,0)
}

const mostLikes = (blogs) => {
    const authorLikes = blogs.reduce((acc, blog) => {
        const currentLikes = blog.likes;
        const author = blog.author;

        if (acc[author]) {
            acc[author].likes += Number(currentLikes);
        } else {
            acc[author] = {
                name: author,
                likes: currentLikes
            };
        }

        return acc;
    },{})

    const authorLikesArray = Object.values(authorLikes)

    const mostLiked = authorLikesArray.reduce((max, current) => {
        return current.likes > max.likes ? current : max;
    })

    return mostLiked

}

const mostBlogs = (blogs) => {
    const authorStats = blogs.reduce((acc, blog) => {
        const author = blog.author;

        if (acc[author]) {
            acc[author].count += 1;
        } else {
            acc[author] = {
                name: author,
                count: 1,
            };
        }

        return acc;
    }, {});

    const authorStatsArray = Object.values(authorStats)

    const most = authorStatsArray.reduce((max, current) => {
            return current.count > max.count ? current : max;
        })

    return most
}

const fav = (blogs) => {
    const mostLiked = blogs.reduce((maxLikes, currentElement) => {
        return currentElement.likes > maxLikes.likes ? currentElement : maxLikes;
    }, blogs[0])

    delete mostLiked._id
    delete mostLiked.__v
    delete mostLiked.url

    return mostLiked
}

module.exports = {
    dummy,
    sum,
    fav,
    mostBlogs,
    mostLikes
}
