import * as ApiClient from '~/api-client'

export const apiClientWrapper = (version: string = 'v1') => {
  const config = new ApiClient.Configuration({ basePath: `${process.env.apiBaseUrl}/${version}` })
  return new ApiClient.PetsApi(config)
}
