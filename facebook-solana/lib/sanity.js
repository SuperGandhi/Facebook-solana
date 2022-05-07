import sanityCLient from '@sanity/client'

export const client = sanityCLient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataSet: 'production',
    apiVersion: 'v1',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
})