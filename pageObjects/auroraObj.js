var auroraCommands = {
    homePage: function () {
        this
            .waitForElementVisible('body')
            .verify.visible('@ourVision')
            .getLocationInView('@ourDriver')
            .verify.visible('@ourDriver')
            .getLocationInView('@ourTechnology')
            .verify.visible('@ourTechnology')
            .getLocationInView('@ourTeamHome')
            .verify.visible('@ourTeamHome')
            .getLocationInView('@ourOpenRoles')
            .verify.visible('@ourOpenRoles')
            .getLocationInView('@blockQuote')
            .verify.visible('@blockQuote')
        return this
    },
    menuLinks: function (data) {
        this
            //Aurora Driver
            .waitForElementVisible('body')
            .click(data.menu)
            .verify.urlEquals(data.url)
        return this
    },
    footerLinks: function (data) {
        this
            .waitForElementVisible('body')
            .getLocationInView('@footer')
            .click(data.footer)
            .verify.urlEquals(data.url)
        return this
    },
    pageTwoSections: function (data) {
        this
            .click(data.menu)
            .verify.visible(data.section1)
            .getLocationInView(data.section2)
            .verify.visible(data.section2)
        return this
    },
    pageThreeSections: function (data) {
        this
            .waitForElementVisible('body')
            .click(data.menu)
            .verify.visible(data.section1)
            .getLocationInView(data.section2)
            .verify.visible(data.section2)
            .getLocationInView(data.section3)
            .verify.visible(data.section3)
        return this
    },
    pageFourSections: function (data) {
        this
            .waitForElementVisible('body')
            .click(data.menu)
            .verify.visible(data.section1)
            .getLocationInView(data.section2)
            .verify.visible(data.section2)
            .getLocationInView(data.section3)
            .verify.visible(data.section3)
            .getLocationInView(data.section4)
            .verify.visible(data.section4)
        return this
    },
    currentJobs: function () {
        this
            .click('@careersMenu')
            .waitForElementVisible('body')
            .verify.visible('@currentJobs')
            .verify.visible('@locationFilter')
            .verify.visible('@departmentFilter')
            .verify.visible('@titleSearch')
    }
}

module.exports = {
    url: 'https://aurora.tech/',
    commands: [auroraCommands],
    elements: {
        //Menu Items
        logo: '.ui.middle.aligned.image',
        driverMenu: {
            selector: '(//*[text()="Aurora Driver"])[1]',
            locateStrategy: 'xpath'
        },
        technologyMenu: {
            selector: '(//*[text()="Technology"])[1]',
            locateStrategy: 'xpath'
        },
        safetyMenu: {
            selector: '(//*[text()="Safety"])[1]',
            locateStrategy: 'xpath'
        },
        ourTeamMenu: {
            selector: '(//*[text()="Our Team"])[1]',
            locateStrategy: 'xpath'
        },
        careersMenu: {
            selector: '(//*[text()="Careers"])[1]',
            locateStrategy: 'xpath'
        },

        //Home Page Items
        ourVision: {
            selector: '//*[text()="Our Vision"]',
            locateStrategy: 'xpath'
        },
        ourDriver: {
            selector: '//*[text()="Our Driver"]',
            locateStrategy: 'xpath'
        },
        ourTechnology: {
            selector: '//*[text()="Our Technology"]',
            locateStrategy: 'xpath'
        },
        ourTeamHome: {
            selector: '(//*[text()="Our Team"])[2]',
            locateStrategy: 'xpath'
        },
        ourOpenRoles: {
            selector: '//*[text()="Our Open Roles"]',
            locateStrategy: 'xpath'
        },

        blockQuote: '.mb-0.hero-blockquote-text',

        //Footer Links
        footer: '[src="/img/aurora-logo-white.svg"]',
        homeFooter: {
            selector: '//*[text()="Home"]',
            locateStrategy: 'xpath'
        },
        driverFooter: {
            selector: '(//*[text()="Aurora Driver"])[2]',
            locateStrategy: 'xpath'
        },
        technologyFooter: {
            selector: '(//*[text()="Technology"])[2]',
            locateStrategy: 'xpath'
        },
        safetyFooter: {
            selector: '(//*[text()="Safety"])[2]',
            locateStrategy: 'xpath'
        },
        ourTeamFooter: {
            selector: '(//*[@class="item footer-link-item"])[2]',
            locateStrategy: 'xpath'
        },
        careersFooter: {
            selector: '(//*[text()="Careers"])[2]',
            locateStrategy: 'xpath'
        },
        auroraLifeFooter: {
            selector: '//*[text()="Aurora Life"]',
            locateStrategy: 'xpath'
        },
        blogFooter: {
            selector: '//*[text()="Blog"]',
            locateStrategy: 'xpath'
        },
        termsFooter: {
            selector: '//*[text()="Terms"]',
            locateStrategy: 'xpath'
        },
        privacyPolicyFooter: {
            selector: '//*[text()="Privacy Policy"]',
            locateStrategy: 'xpath'
        },

        //Aurora Driver Page
        ourPlatform: {
            selector: '//*[text()="Our Platform"]',
            locateStrategy: 'xpath'
        },
        impact: {
            selector: '//*[text()="Impact on our Society"]',
            locateStrategy: 'xpath'
        },

        //Technology Page
        motivation: {
            selector: '//*[text()="What motivates our work"]',
            locateStrategy: 'xpath'
        },
        ourTechnicalTeams: {
            selector: '//*[text()="Our technical teams"]',
            locateStrategy: 'xpath'
        },

        //Safety Page
        aboutAurora: {
            selector: '//*[text()="About Aurora"]',
            locateStrategy: 'xpath'
        },
        saveLives: {
            selector: '//*[text()="Technology that will save lives"]',
            locateStrategy: 'xpath'
        },

        //Our Team Page
        ECE: {
            selector: '//*[text()="EXPERIENCE, COLLABORATION, EXCELLENCE"]',
            locateStrategy: 'xpath'
        },
        guidingPrinciples: {
            selector: '//*[text()="Our guiding principles"]',
            locateStrategy: 'xpath'
        },
        pressHighlights: {
            selector: '//*[text()="Press highlights"]',
            locateStrategy: 'xpath'
        },
        ourOffices: {
            selector: '//*[text()="Our offices"]',
            locateStrategy: 'xpath'
        },

        //Careers
        revolutionizingMobility: {
            selector: '//*[text()="Revolutionizing mobility"]',
            locateStrategy: 'xpath'
        },
        lifeAtAurora: {
            selector: '(//*[text()="Life at Aurora"])[9]',
            locateStrategy: 'xpath'
        },
        currentJobs: {
            selector: '#openings',
            locateStrategy: 'xpath'
        },
        locationFilter: {
            selector: '(//*[@role="combobox"])[1]',
            locateStrategy: 'xpath'
        },
        departmentFilter: {
            selector: '(//*[@role="combobox"])[2]',
            locateStrategy: 'xpath'
        },
        titleSearch: {
            selector: '#form-input-control-search-job-title',
            locateStrategy: 'xpath'
        }
    }
}