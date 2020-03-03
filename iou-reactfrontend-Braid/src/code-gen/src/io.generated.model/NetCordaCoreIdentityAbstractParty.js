/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreIdentityAbstractParty model module.
 * @module io.generated.model/NetCordaCoreIdentityAbstractParty
 * @version 1.0.0
 */
class NetCordaCoreIdentityAbstractParty {
    /**
     * Constructs a new <code>NetCordaCoreIdentityAbstractParty</code>.
     * @alias module:io.generated.model/NetCordaCoreIdentityAbstractParty
     * @param owningKey {String} Base 58 Encoded Public Key
     */
    constructor(owningKey) { 
        
        NetCordaCoreIdentityAbstractParty.initialize(this, owningKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, owningKey) { 
        obj['owningKey'] = owningKey;
    }

    /**
     * Constructs a <code>NetCordaCoreIdentityAbstractParty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreIdentityAbstractParty} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreIdentityAbstractParty} The populated <code>NetCordaCoreIdentityAbstractParty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreIdentityAbstractParty();

            if (data.hasOwnProperty('owningKey')) {
                obj['owningKey'] = ApiClient.convertToType(data['owningKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Base 58 Encoded Public Key
 * @member {String} owningKey
 */
NetCordaCoreIdentityAbstractParty.prototype['owningKey'] = undefined;






export default NetCordaCoreIdentityAbstractParty;
