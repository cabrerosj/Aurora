var aurora

var menuLinks = require('../testAssets/menuLinks')

var footerLinks = require('../testAssets/footerLinks')

var pageTwoSections = require('../testAssets/pageTwoSections')

var pageThreeSections = require('../testAssets/pageThreeSections')

var pageFourSections = require('../testAssets/pageFourSections')

module.exports = {
    beforeEach: browser => {
        aurora = browser.page.auroraObj()
        aurora.navigate()
    },
    after: browser => {
        aurora.end()
    },

    // 'Home Page Visibility': browser => {
    //     aurora.homePage()  
    // },

    // 'Menu Link Validation': browser => {
    //     menuLinks.forEach(link => {
    //         aurora.menuLinks(link)
    //     })
    // },

    // 'Footer Link Validation': browser => {
    //     footerLinks.forEach(link => {
    //         aurora.footerLinks(link)
    //     })
    //     aurora.assert.attributeContains('@blogFooter', 'href', 'https://medium.com/aurora-blog')
    // },

    'Page Sections': browser => {
        aurora.waitForElementVisible('body')
        pageTwoSections.forEach(twoSections => {
            aurora.pageTwoSections(twoSections)
        })
        aurora.waitForElementVisible('body')
        pageThreeSections.forEach(threeSections => {
            aurora.pageThreeSections(threeSections)
        })
        aurora.waitForElementVisible('body')
        pageFourSections.forEach(fourSections => {
            aurora.pageThreeSections(fourSections)
        })
        aurora.currentJobs()
    }
}