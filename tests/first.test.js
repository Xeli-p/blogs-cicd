const listHelper = require('../utils/list_helper')
const mongoose = require('mongoose')
const blog = require('../models/blogNote')


describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]
    const listWithManyBlogs2 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs3 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'asssger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'assger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        },
        {
            _id: '524753537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 24,
            __v: 0
        },
        {
            _id: '333353537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'adadadadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 21,
            __v: 0
        }
    ]

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.sum(listWithOneBlog)
        expect(result).toBe(5)
    })

    test('when list has many blogs ', () => {
        const result = listHelper.sum(listWithManyBlogs)
        expect(result).toBe(15)
    })

})

describe('most likes', () =>{
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]
    const listWithManyBlogs2 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs3 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'asssger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'assger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        },
        {
            _id: '524753537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 24,
            __v: 0
        },
        {
            _id: '333353537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'adadadadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 21,
            __v: 0
        }
    ]
    test('most likes out of a blog array2', () => {
        const result = listHelper.fav(listWithManyBlogs3)
        const actual = { ...listWithManyBlogs3[4]}
        delete actual._id
        delete actual.url
        delete actual.__v
        expect(result).toEqual(actual)

    })

})

describe('most blogs', () =>{
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]
    const listWithManyBlogs2 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs3 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'asssger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'assger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        },
        {
            _id: '524753537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 24,
            __v: 0
        },
        {
            _id: '333353537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'adadadadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 21,
            __v: 0
        }
    ]
    test('most blogging publisher out of a blog array2', () => {
        const result = listHelper.mostBlogs(listWithManyBlogs2)
        const actual = {
            "name": "Edsger W. Dijkstra",
            "count": 3
        }
        expect(result).toEqual(actual)

    })

    test('most blogging publisher out of a blog array3', () => {
        const listWithOneBlog = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            }
        ]
        const listWithManyBlogs2 = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d1725',
                title: 'Go To Safdadent Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676366d17f8',
                title: 'agdsu Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 3,
                __v: 0
            },
            {
                _id: '52444aa71b54a676234d1725',
                title: 'agdgadgagdt Considered Harmful',
                author: 'afdadfW. Dijkstra',
                url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
                likes: 2,
                __v: 0
            }
        ]
        const listWithManyBlogs = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d1725',
                title: 'Go To Safdadent Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676366d17f8',
                title: 'agdsu Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 3,
                __v: 0
            },
            {
                _id: '52444aa71b54a676234d1725',
                title: 'agdgadgagdt Considered Harmful',
                author: 'afdadfW. Dijkstra',
                url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
                likes: 2,
                __v: 0
            }
        ]
        const listWithManyBlogs3 = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'asssger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d1725',
                title: 'Go To Safdadent Considered Harmful',
                author: 'assger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676366d17f8',
                title: 'agdsu Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 3,
                __v: 0
            },
            {
                _id: '52444aa71b54a676234d1725',
                title: 'agdgadgagdt Considered Harmful',
                author: 'afdadfW. Dijkstra',
                url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
                likes: 2,
                __v: 0
            },
            {
                _id: '524753537754a676234d1725',
                title: 'agdgadgagdt Considered Harmful',
                author: 'afdadfW. Dijkstra',
                url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
                likes: 24,
                __v: 0
            },
            {
                _id: '333353537754a676234d1725',
                title: 'agdgadgagdt Considered Harmful',
                author: 'adadadadfW. Dijkstra',
                url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
                likes: 21,
                __v: 0
            }
        ]
        const result = listHelper.mostBlogs(listWithManyBlogs3)
        const actual = {
            "name": "afdadfW. Dijkstra",
            "count": 2
        }
        expect(result).toEqual(actual)

    })

})

describe('most liked publisher', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]
    const listWithManyBlogs2 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        }
    ]
    const listWithManyBlogs3 = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'asssger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1725',
            title: 'Go To Safdadent Considered Harmful',
            author: 'assger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676366d17f8',
            title: 'agdsu Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
        {
            _id: '52444aa71b54a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 2,
            __v: 0
        },
        {
            _id: '524753537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'afdadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 24,
            __v: 0
        },
        {
            _id: '333353537754a676234d1725',
            title: 'agdgadgagdt Considered Harmful',
            author: 'adadadadfW. Dijkstra',
            url: 'http://www.gadgadlgakadjgjadagaj_violations/Go_To_Considered_Harmful.html',
            likes: 21,
            __v: 0
        }
    ]

    test('most liked author of an entry array', () => {
        const result = listHelper.mostLikes(listWithManyBlogs3)
        const actual = {
            "name": "afdadfW. Dijkstra",
            "likes": 26
        }
        expect(result).toEqual(actual)

    })
})


test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})
