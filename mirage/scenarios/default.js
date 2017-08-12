import ENV from 'environweb/config/environment';

export default function(server) {
  const config = ENV['ember-cli-mirage'];
  const { factoryCounts } = config;

  server.createList('property', factoryCounts.property);
}
