export default function() {
  this.namespace = 'api';
  this.timing = 200;

  this.get('/properties', (schema) => {
    return schema.properties.all();
  });
}
