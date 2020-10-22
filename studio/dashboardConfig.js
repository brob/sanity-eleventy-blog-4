export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f91c329f363280e58e67e52',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-4-studio',
                  apiId: 'cc765130-8b0c-49b4-804b-d0673d17687d'
                },
                {
                  buildHookId: '5f91c329f363280aeae6c5a7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-4',
                  apiId: '835a0493-b4a7-455d-b516-4eb3aae07bee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brob/sanity-eleventy-blog-4',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
