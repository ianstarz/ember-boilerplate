export default function() {
  this.namespace = 'api';
  this.timing = 200;

  this.get('/properties', (schema, request) => {
    return schema.properties.all();
  });
}
