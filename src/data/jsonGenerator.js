[
  '{{repeat(5)}}',
  {
    id: '{{index()}}',
    organization: {
      projectName: '{{lorem(5, "words")}}',
      name: '{{lorem(2, "words")}}',
      phone: '{{integer(1000000000, 9999999999)}}',
      email: '{{email()}}',
      date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
      address: '{{firstName()}} {{surname()}}\n{{integer(100, 999)}} {{street()}}\n{{city()}}, {{state()}} {{integer(100, 10000)}}',
      author: '{{firstName()}} {{surname()}}'},
    documentTracking: [
      '{{repeat(3,7)}}',
      {
        id: '{{index()}}',
        editAuthor: '{{firstName()}} {{surname()}}',
        date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
        description: '{{lorem(15, "words")}}'
      }
    ],
    projectOverview: {text: '{{lorem(1, "paragraphs")}}'},
    linksToWireframes: [
      '{{repeat(3, 7)}}',
      {
        nickname: '{{lorem(4, "words")}}',
        url: 'https://www.{{lorem(1,"words")}}.com'
      }
    ],
    editingUpdatesAdmin: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    sitemapNavigation: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    contentManagement: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    siteStatsTracking: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    searchEngineOptimization: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    webContentManagementSystem: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    accessibility: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    styleDesign: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    security: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    hosting: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    maintenanceSupport: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    additionalRequirements: [
      '{{repeat(3, 7)}}',
      {
        id: '{{index()}}',
        description: '{{lorem(10, "words")}}',
        remarks: '{{lorem(10, "words")}}'
      }
    ],
    exclusions: {text: '{{lorem(1, "paragraphs")}}'},
    considerations: {text: '{{lorem(1, "paragraphs")}}'},
    assumptions: {text: '{{lorem(1, "paragraphs")}}'},
    comments: {text: '{{lorem(1, "paragraphs")}}'}
  }
]