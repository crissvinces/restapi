const admin = require('firebase-admin');
 const db = admin.firestore();

 exports.createItem = async (req, res) => {
    swagger.tags = ['Items']
    swagger.description = 'Create an item'
    swagger.summary = 'Create an item'
    swagger.parameters['data'] = {
        in: 'body',
        description: 'Data to create an item',
        required: true,
    }
    swagger.responses[201] = {
        description: 'Item successfully created',
    }
    swagger.responses[400] = {
        description: 'Bad request',
    }

 };

 exports.getAllItems = async (req, res) => {
    swagger.tags = ['Items']
    swagger.description = 'Get all items entries'
    swagger.summary = 'Get all items entries'
    swagger.responses[200] = {
        description: 'Items entries successfully obtained',
    }
    swagger.responses[400] = {
        description: 'Bad request',
    }
 };
 exports.getItem = async (req, res) => {

    swagger.tags = ['Items']
     swagger.description = 'Get an item entry'
     swagger.summary = 'Get an item entry'
     swagger.parameters['id'] = {
         description: 'Item id',
         required: true,
     }
     swagger.responses[404] = {
         description: 'Item not found',
     }
     swagger.responses[400] = {
         description: 'Bad request',
     }
     swagger.responses[200] = {
         description: 'Get an item by id',
     }

};

exports.updateItem = async (req, res) => {

    swagger.tags = ['Items']
           swagger.description = ''
           swagger.summary = ''
           swagger.parameters['id'] = {
               description: '',
               required: true,
           }
           swagger.parameters['data'] = {
               in: 'body',
               description: '',
               required: true,
           }
           swagger.responses[200] = {
               description: '',
           }
           swagger.responses[400] = {
               description: '',
           }

};

exports.deleteItem = async (req, res) => {

    swagger.tags = ['Items']
         swagger.description = ''
         swagger.summary = ''
         swagger.parameters['id'] = {
             description: '',
             required: true,
         }

         swagger.responses[200] = {
             description: '',
         }
         swagger.responses[400] = {
             description: '',
         }

};
