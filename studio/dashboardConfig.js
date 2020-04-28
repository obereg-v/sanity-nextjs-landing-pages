export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ea803f2d3d2f51966494b90',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wzp3mmkm',
                  apiId: '1f3bce2f-65d3-4f1f-bcce-266bd3937be1'
                },
                {
                  buildHookId: '5ea803f3d3d2f550d74947e6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tvx9ceru',
                  apiId: '1f231b8f-e2b3-4871-a361-79d0777ea84a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/obereg-v/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tvx9ceru.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
