export interface ClientInterface {
  id?:             string;
  nombre:         string;
  apellido:       string;
  email:          string;
  telefono:       string;
  fecha_registro?: Date;
  pais_id:        string;
}
