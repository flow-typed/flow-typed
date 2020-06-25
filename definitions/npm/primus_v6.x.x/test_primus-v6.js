// @flow
import Primus from 'primus';
import http from 'http';

const primus: Primus = new Primus(new http.Server());
(primus.clients(): string[]);
(primus.write(123): void);
(primus.save('path'): void);
primus.forEach((spark: Primus$Spark, id: string, connections: any) => {
  (spark.id: string);
  (spark.query: string);
  (spark.write('foo'): void);
  // $FlowExpectedError
  spark.on(123, () => ({}));
});
// $FlowExpectedError
primus.remove(123);


primus.plugin('testPlugin', {});
// $FlowExpectedError Primus 5 syntax
primus.use('testPliugin', {});
