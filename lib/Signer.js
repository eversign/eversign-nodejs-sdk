'use strict';

//TODO: Add documentation

function Signer(newSigner = {}) {
  var signer = {
    /**
     * Sets the id of the Signer.
     * @type {Number}
     */
    id: undefined,

    /**
     * The order number of the Signer
     * Usually starts with 1 for the first Signer.
     * @type {Number}
     */
    order: undefined,

    /**
     * Sets the full name of the Signer.
     * @type {String}
     */
    name: undefined,

    /**
     * Sets the email of the Email.
     * @type {String}
     */
    email: undefined,

    /**
     * Roles are used when creating a document from a template.
     * Please note that all required roles must be specified in order to use a template.
     * @type {String}
     */
    role: undefined,

    /**
     * Returns 1 if this signing role is required (Templates only).
     * @type {Boolean}
     */
    required: false,

    /**
     * Pins are used as an extra level of security and must be put in
     * by the signer before signing the Document.
     * @type {Number}
     */
    pin: undefined,

    /**
     * True if the Signer has signed the associated Document
     * @type {Boolean}
     */
    signed: undefined,

    /**
     * Time of signing the Document if the Signer has signed already
     * @type {String}
     */
    signedTimestamp: undefined,

    /**
     * True if the Signer declined to sign the Document
     * @type {Boolean}
     */
    declined: undefined,

    /**
     * True if the Document has been sent to the Signer
     * @type {Boolean}
     */
    sent: undefined,

    /**
     * True if the Document has been viewed to the Signer
     * @type {Boolean}
     */
    viewed: undefined,

    /**
     * URL of the Signing Request that is sent to the Signer
     * @type {String}
     */
    signingUrl: undefined,

    /**
     * Status of the Signer
     * @type {String}
     */
    status: undefined,


    /**
     * the embedded/iframe signing url
     *
     * @var {Date} embeddedSigningUrl
     * @type {Date}
     */
    embeddedSigningUrl: undefined,
      
     /**
     * Forces document to be emailed in the case embedded signing is enabled for this template
     * Usually starts with 1 for the first Signer.
     * @type {Boolean}
     */
    setDeliverEmail: undefined,
  };

  Object.assign(signer, newSigner);

  this.getId = function () {
    return signer.id;
  };

  this.getOrder = function () {
    return signer.order;
  };

  this.getPin = function () {
    return signer.pin;
  };

  this.getSigned = function () {
    return signer.signed;
  };

  this.getSignedTimestamp = function () {
    return signer.signedTimestamp;
  };

  this.getDeclined = function () {
    return signer.declined;
  };

  this.getSent = function () {
    return signer.sent;
  };

  this.getViewed = function () {
    return signer.viewed;
  };

  this.getSigningUrl = function () {
    return signer.signingUrl;
  };

  this.getStatus = function () {
    return signer.status;
  };

  this.setId = function (newId) {
    signer.id = newId;
  };

  this.setOrder = function (newOrder) {
    signer.order = newOrder;
  };

  this.setPin = function (newPin) {
    signer.pin = newPin;
  };

  this.setSigned = function (newSigned) {
    signer.signed = newSigned;
  };

  this.setSignedTimestamp = function (newSignedTimstamp) {
    signer.signedTimestamp = newSignedTimstamp;
  };

  this.setDeclined = function (newDeclined) {
    signer.declined = newDeclined;
  };

  this.setSent = function (newSent) {
    signer.sent = newSent;
  };

  this.setViewed = function (newViewed) {
    signer.viewed = newViewed;
  };

  this.setSigningUrl = function (newSigningUrl) {
    signer.signingUrl = newSigningUrl;
  };

  this.setStatus = function (newStatus) {
    signer.status = newStatus;
  };

  this.getName = function () {
    return signer.name;
  };

  this.getEmail = function () {
    return signer.email;
  };

  this.getRole = function () {
    return signer.role;
  };

  this.getRequired = function () {
    return signer.required;
  };

  this.setName = function (newName) {
    signer.name = newName;
  };

  this.setEmail = function (newEmail) {
    signer.email = newEmail;
  };

  this.setRole = function (newRole) {
    signer.role = newRole;
  }

  this.setRequired = function (newRequired) {
    signer.required = newRequired;
  }

  this.toObject = function () {
    return Object.assign(this, signer);
  };

  this.getEmbeddedSigningUrl = function () {
    return signer.embeddedSigningUrl;
  };
    
   this.setDeliverEmail = function(newDeliverEmail) {
        signer.deliver_email = newDeliverEmail;
    };

}

module.exports = Signer;
