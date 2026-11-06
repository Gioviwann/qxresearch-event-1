import {
  Callout,
  Divider,
  Grid,
  H1,
  H2,
  Link,
  Stack,
  Stat,
  Table,
  Text,
} from "cursor/canvas";

const fuente =
  "Fuente: páginas de contacto de cada empresa, consultadas el 27 de octubre de 2026. La tarifa es solo la que publica Chofer Barcelona.";

export default function TransporteVipBarcelona() {
  return (
    <Stack gap={28} style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Stack gap={12}>
        <H1>Transporte VIP para las rutas</H1>
        <Text>
          Doce empresas de chofer privado en Barcelona con correo público. Las
          seis primeras sirven para recoger al grupo, esperar mientras hace la
          ruta en bici y dejarlo en el hotel.
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="12" label="Empresas con correo" tone="info" />
        <Stat value="6" label="Con van o minibús" />
        <Stat value="240 €" label="Medio día, Mercedes E" />
        <Stat value="30 años" label="AC Cars y J&G" />
      </Grid>

      <Callout tone="info" title="Qué pedir en el primer correo">
        Tarifa neta de 4 horas: recogida en el hotel, espera durante la ruta
        (unas 2 horas) y regreso. Mercedes V de 7 plazas y, si el grupo no
        cabe, Sprinter. Factura a nombre de la agencia.
      </Callout>

      <Stack gap={12}>
        <H2>Para ofrecer en la ruta</H2>
        <Text>
          Disposición por horas y vehículo de grupo. La fila marcada es la
          primera a la que escribir.
        </Text>
        <Table
          striped
          headers={["Empresa", "Correo", "Teléfono", "Encaje"]}
          columnAlign={["left", "left", "right", "left"]}
          rowTone={["success", undefined, undefined, undefined, undefined, undefined]}
          rows={[
            [
              "AC Cars",
              <Link href="mailto:info@accars.es">info@accars.es</Link>,
              "+34 934 146 341",
              "30 años. V, minibús y autocar. Tours y disposición.",
            ],
            [
              "J&G Elegance Cars",
              <Link href="mailto:info@jgelegancecars.com">
                info@jgelegancecars.com
              </Link>,
              "+34 671 517 885",
              "30 años. Agencias, tours y Clase V.",
            ],
            [
              "Transfers Cars Barcelona",
              <Link href="mailto:info@bcntransfer.com">info@bcntransfer.com</Link>,
              "+34 934 736 736",
              "Agencias e incentivos. Sprinter. También aliciam@",
            ],
            [
              "Chofer Barcelona",
              <Link href="mailto:info@barcelonachofer.com">
                info@barcelonachofer.com
              </Link>,
              "—",
              "Tarifa de 4 h y 8 h publicada. Sprinter 16.",
            ],
            [
              "Enmercedes",
              <Link href="mailto:info@enmercedes.com">info@enmercedes.com</Link>,
              "+34 649 969 695",
              "Base en Sitges. V y minibús de 8 a 20.",
            ],
            [
              "Berlinas Barcelona",
              <Link href="mailto:info@berlinasbarcelona.com">
                info@berlinasbarcelona.com
              </Link>,
              "+34 643 937 607",
              "Factura mensual a agencias. Rutas por Cataluña.",
            ],
          ]}
        />
        <Text size="small" tone="tertiary">
          {fuente}
        </Text>
      </Stack>

      <Stack gap={12}>
        <H2>Traslado ejecutivo, aparte de la bici</H2>
        <Text>
          Aeropuerto, hotel y cliente suelto. La fila marcada cubre Montserrat,
          Sitges y Costa Brava por horas.
        </Text>
        <Table
          striped
          headers={["Empresa", "Correo", "Teléfono", "Encaje"]}
          columnAlign={["left", "left", "right", "left"]}
          rowTone={["info", undefined, undefined, undefined, undefined, undefined]}
          rows={[
            [
              "BCN Private Chauffeur",
              <Link href="mailto:reservations@bcnprivatechauffeur.com">
                reservations@bcnprivatechauffeur.com
              </Link>,
              "+34 632 196 233",
              "Por horas, aeropuerto y Costa Brava. Royal Falcon.",
            ],
            [
              "City Transfer",
              <Link href="mailto:info@citytransfer.es">info@citytransfer.es</Link>,
              "+34 635 084 561",
              "Cuenta de agencia. Vito hasta 8 plazas.",
            ],
            [
              "Premium Car Transfers",
              <Link href="mailto:info@premiumcartransfers.com">
                info@premiumcartransfers.com
              </Link>,
              "+34 618 794 722",
              "City tour con guía. Mercedes Clase S.",
            ],
            [
              "BlackButton",
              <Link href="mailto:info@blackbutton.vip">info@blackbutton.vip</Link>,
              "+34 627 536 199",
              "Eventos, MWC y rutas de bodegas.",
            ],
            [
              "Dachs Limousines",
              <Link href="mailto:info@dachslimousines.com">
                info@dachslimousines.com
              </Link>,
              "+34 932 314 507",
              "Congresos y turismo. C/ Valencia 455.",
            ],
            [
              "Mr Charles",
              <Link href="mailto:sales@mrcharles.co">sales@mrcharles.co</Link>,
              "—",
              "Maybach y terminal VIP. Un cliente, no un grupo.",
            ],
          ]}
        />
        <Text size="small" tone="tertiary">
          Royal Falcon también publica reservation@royalfalconlimo.es para
          cuentas de empresa. {fuente}
        </Text>
      </Stack>

      <Divider />

      <Stack gap={12}>
        <H2>Precio publicado de medio día</H2>
        <Text>
          Chofer Barcelona es la única que deja la tarifa en la web. Sirve de
          suelo para cotizar la espera de la ruta. La fila marcada es el
          vehículo de un grupo pequeño.
        </Text>
        <Table
          striped
          headers={["Vehículo", "Plazas", "4 horas", "8 horas"]}
          columnAlign={["left", "right", "right", "right"]}
          rowTone={[undefined, undefined, "info", undefined, undefined]}
          rows={[
            ["Mercedes E", "3", "240 €", "520 €"],
            ["Mercedes S", "4", "340 €", "760 €"],
            ["Mercedes V", "7", "280 €", "600 €"],
            ["Sprinter", "16", "460 €", "960 €"],
            ["Autobús", "20–50", "720 €", "1.400 €"],
          ]}
        />
        <Text size="small" tone="tertiary">
          Fuente: barcelonachofer.com/contacto, 27 de octubre de 2026. El resto
          de empresas cotiza bajo petición.
        </Text>
      </Stack>
    </Stack>
  );
}
