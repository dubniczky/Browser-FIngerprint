import * as browser from './browser'
import md5 from './md5'

export async function run()
{
    const properties:browser.PersistentProperties = await browser.props()
    const propstring:string = JSON.stringify(properties)

    return {
        fingerprint: md5(propstring),
        details: properties
    }
}