import * as React from "react";
import { motion } from "framer-motion";

export function DEIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          enableBackground: "new 0 0 96 96",
        }}
        viewBox="0 0 96 120"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path d="M59.595 34.727c-2.796-.775-6.391-1.237-10.238-1.326V32.24a3.091 3.091 0 0 0 1.733-2.773 3.095 3.095 0 0 0-3.091-3.091 3.095 3.095 0 0 0-3.091 3.091 3.09 3.09 0 0 0 1.733 2.772V33.4c-3.847.089-7.441.551-10.238 1.326-3.756 1.041-5.66 2.529-5.66 4.422v31.796c0 4.551 10.847 5.765 17.256 5.765s17.256-1.214 17.256-5.765V39.15c.001-1.894-1.904-3.382-5.66-4.423zm2.945 25.792c-.082.256-.981 1.133-4.045 1.924-2.843.734-6.571 1.139-10.495 1.139-3.925 0-7.652-.404-10.495-1.139-3.064-.792-3.964-1.668-4.045-1.924v-7.902c3.635 1.836 10.136 2.409 14.54 2.409 4.405 0 10.905-.573 14.54-2.409v7.902zm0-11.271c-.082.256-.981 1.133-4.045 1.924-2.843.734-6.571 1.139-10.495 1.139-3.925 0-7.652-.404-10.495-1.139-3.064-.792-3.964-1.668-4.045-1.924v-6.766c.805.405 1.786.769 2.945 1.09 3.123.866 7.241 1.343 11.595 1.343s8.472-.477 11.595-1.343c1.158-.321 2.14-.685 2.945-1.09v6.766zM48 29.093a.38.38 0 0 1 .376.375.38.38 0 0 1-.376.375.38.38 0 0 1-.375-.375.38.38 0 0 1 .375-.375zm-10.473 8.145c2.515-.648 5.711-1.039 9.115-1.121v3.033a1.358 1.358 0 0 0 2.716 0v-3.033c3.405.082 6.601.473 9.115 1.121 3.013.777 3.946 1.636 4.061 1.912-.115.276-1.048 1.135-4.062 1.912-2.847.734-6.566 1.138-10.473 1.138s-7.626-.404-10.473-1.138c-3.013-.777-3.947-1.636-4.062-1.912.117-.276 1.05-1.135 4.063-1.912zm20.968 35.618c-2.843.735-6.571 1.139-10.495 1.139-3.925 0-7.652-.404-10.495-1.139-3.064-.792-3.963-1.668-4.045-1.924v-7.045c3.635 1.836 10.136 2.409 14.54 2.409 4.405 0 10.905-.573 14.54-2.409v7.045c-.081.257-.98 1.133-4.045 1.924zM56.14 48.057a1.359 1.359 0 0 1-1.17 1.523 50.47 50.47 0 0 1-3.648.34c-.027.002-.053.002-.079.002a1.358 1.358 0 0 1-.076-2.713 47.796 47.796 0 0 0 3.451-.322 1.36 1.36 0 0 1 1.522 1.17zm4.423-1.061a1.358 1.358 0 0 1-.943 1.672c-.159.044-.322.088-.488.13a1.358 1.358 0 0 1-.677-2.63c.148-.038.293-.077.436-.116a1.36 1.36 0 0 1 1.672.944zM49.889 59.151a1.357 1.357 0 0 1 1.278-1.433 47.584 47.584 0 0 0 3.451-.322 1.358 1.358 0 0 1 .354 2.692 50.182 50.182 0 0 1-3.649.34c-.027.002-.053.002-.079.002a1.356 1.356 0 0 1-1.355-1.279zm7.589-.821a1.358 1.358 0 0 1 .978-1.652c.148-.038.293-.077.436-.116a1.358 1.358 0 0 1 .726 2.616c-.159.044-.322.088-.488.13a1.356 1.356 0 0 1-1.652-.978zM56.14 69.286a1.358 1.358 0 0 1-1.169 1.523 50.287 50.287 0 0 1-3.728.342 1.358 1.358 0 0 1-.076-2.713 47.697 47.697 0 0 0 3.451-.321 1.358 1.358 0 0 1 1.522 1.169zm4.423-1.059a1.357 1.357 0 0 1-.945 1.671c-.159.044-.322.088-.488.13a1.356 1.356 0 1 1-.674-2.63c.148-.038.293-.077.436-.116a1.357 1.357 0 0 1 1.671.945zm12.856-27.432c0 1.217.709 2.269 1.733 2.773v3.616h-6.375a1.358 1.358 0 0 0 0 2.716h7.733c.75 0 1.358-.608 1.358-1.358v-4.974a3.091 3.091 0 0 0 1.733-2.773 3.095 3.095 0 0 0-3.091-3.091 3.095 3.095 0 0 0-3.091 3.091zm3.467 0a.38.38 0 0 1-.375.376.38.38 0 0 1-.375-.376.38.38 0 0 1 .375-.375.38.38 0 0 1 .375.375zm5.975 11.162a3.09 3.09 0 0 0-2.772 1.733H68.777a1.358 1.358 0 0 0 0 2.716h11.312a3.091 3.091 0 0 0 2.772 1.733 3.095 3.095 0 0 0 3.091-3.091 3.094 3.094 0 0 0-3.091-3.091zm0 3.466a.38.38 0 0 1-.375-.375.38.38 0 0 1 .375-.375.38.38 0 0 1 .376.375.38.38 0 0 1-.376.375zm-4.993 11.105v-4.974c0-.75-.608-1.358-1.358-1.358h-7.733a1.358 1.358 0 0 0 0 2.716h6.375v3.617a3.091 3.091 0 0 0-1.733 2.772 3.095 3.095 0 0 0 3.091 3.091 3.095 3.095 0 0 0 3.091-3.091 3.09 3.09 0 0 0-1.733-2.773zm-1.358 3.148c-.204 0-.375-.172-.375-.375s.172-.375.375-.375c.204 0 .375.172.375.375s-.171.375-.375.375zM27.223 47.184h-6.375v-3.616a3.091 3.091 0 0 0 1.733-2.773 3.095 3.095 0 0 0-3.091-3.091 3.095 3.095 0 0 0-3.091 3.091c0 1.217.709 2.269 1.733 2.773v4.974c0 .75.608 1.358 1.358 1.358h7.733a1.358 1.358 0 0 0 0-2.716zM19.49 40.42a.38.38 0 0 1 .375.375.38.38 0 0 1-.375.376.38.38 0 0 1-.376-.376.38.38 0 0 1 .376-.375zm7.733 19.775H19.49c-.75 0-1.358.608-1.358 1.358v4.974a3.091 3.091 0 0 0-1.733 2.772 3.095 3.095 0 0 0 3.091 3.091 3.095 3.095 0 0 0 3.091-3.091 3.093 3.093 0 0 0-1.733-2.773v-3.617h6.375a1.358 1.358 0 0 0 0-2.714zm-7.733 9.481c-.204 0-.376-.172-.376-.375s.172-.375.376-.375c.203 0 .375.172.375.375s-.172.375-.375.375zm7.733-15.986H15.911a3.091 3.091 0 0 0-2.772-1.733 3.095 3.095 0 0 0-3.091 3.091 3.095 3.095 0 0 0 3.091 3.091 3.09 3.09 0 0 0 2.772-1.733h11.312a1.358 1.358 0 0 0 0-2.716zm-14.084 1.733a.38.38 0 0 1-.375-.375.38.38 0 0 1 .375-.375.38.38 0 0 1 .375.375v.002a.38.38 0 0 1-.375.373zm36.219 31.713v-6.909a1.358 1.358 0 0 0-2.716 0v6.909a3.091 3.091 0 0 0-1.733 2.772A3.095 3.095 0 0 0 48 93a3.095 3.095 0 0 0 3.091-3.091 3.093 3.093 0 0 0-1.733-2.773zM48 90.284c-.203 0-.375-.172-.375-.375s.172-.375.375-.375c.204 0 .376.172.376.375s-.173.375-.376.375zm18.794-52.701a1.358 1.358 0 0 1 0-2.716c4.581 0 8.308-3.727 8.308-8.308s-3.727-8.308-8.308-8.308h-1.845c-.595 0-1.12-.387-1.296-.955a8.48 8.48 0 0 0-8.138-5.987 8.466 8.466 0 0 0-4.881 1.536 1.355 1.355 0 0 1-2.092-.769 8.518 8.518 0 0 0-8.244-6.361c-4.698 0-8.52 3.822-8.52 8.52 0 .779.105 1.55.312 2.293a1.358 1.358 0 0 1-1.308 1.723h-1.576c-4.581 0-8.308 3.727-8.308 8.308s3.727 8.308 8.308 8.308a1.358 1.358 0 0 1 0 2.716c-6.078 0-11.023-4.945-11.023-11.023 0-6.055 4.908-10.986 10.954-11.023-.05-.431-.075-.865-.075-1.301C29.062 8.041 34.102 3 40.298 3a11.24 11.24 0 0 1 10.295 6.727 11.172 11.172 0 0 1 4.922-1.133 11.18 11.18 0 0 1 10.387 6.941h.892c6.078 0 11.023 4.945 11.023 11.023s-4.945 11.025-11.023 11.025z" />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Data Egnineering</h4>
    </motion.div>
  );
}

export function SEIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 120"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path d="M83.9 19.15H66.52a4.58 4.58 0 0 0-1-1.9l6.12-6.12h8.19a5 5 0 1 0 0-2.64h-8.74a1.34 1.34 0 0 0-.93.38l-6.51 6.51a4.65 4.65 0 0 0-6.34.21l-1.22 1.22a18.59 18.59 0 0 0-2.68-1.14V14a4.67 4.67 0 0 0-4.67-4.67h-2A4.67 4.67 0 0 0 42.1 14v1.69a18.59 18.59 0 0 0-2.68 1.14l-1.22-1.24a4.66 4.66 0 0 0-5.52-.78l-6.63-6.64a1.34 1.34 0 0 0-.93-.38h-8.75a5 5 0 1 0 0 2.64h8.2l6.09 6.09-.46.48a4.52 4.52 0 0 0-1.2 2.15H12a5.55 5.55 0 0 0-5.55 5.54v43.62A5.55 5.55 0 0 0 12 73.85h28.83v9H30.51a3.6 3.6 0 0 0-3.6 3.6v4.12a1.32 1.32 0 0 0 1.32 1.32h39.38a1.33 1.33 0 0 0 1.32-1.32v-4.13a3.61 3.61 0 0 0-3.6-3.6H55v-9h28.9a5.54 5.54 0 0 0 5.54-5.54V24.69a5.54 5.54 0 0 0-5.54-5.54Zm.72-11.69a2.35 2.35 0 1 1-2.35 2.35 2.35 2.35 0 0 1 2.35-2.35Zm-73 4a2.35 2.35 0 1 1 2.34-2.34 2.35 2.35 0 0 1-2.37 2.33Zm24.74 6 1.93 1.92a1.32 1.32 0 0 0 1.61.2 15.49 15.49 0 0 1 3.89-1.65 1.34 1.34 0 0 0 1-1.28V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.67a1.33 1.33 0 0 0 1 1.28 15.27 15.27 0 0 1 3.88 1.65 1.33 1.33 0 0 0 1.62-.2l1.92-1.92a2 2 0 0 1 2.87 0l1.4 1.4a2 2 0 0 1 .6 1.43 2 2 0 0 1-.6 1.44l-2 2a1.35 1.35 0 0 0-.21 1.59 15.45 15.45 0 0 1 1.54 3.82 1.33 1.33 0 0 0 1.28 1h2.88a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H64a1.33 1.33 0 0 0-1.28 1 15.45 15.45 0 0 1-1.5 3.84 1.33 1.33 0 0 0 .21 1.59l2 2a2 2 0 0 1 0 2.87L62 48.84a2 2 0 0 1-2.87 0l-1.92-1.93a1.32 1.32 0 0 0-1.61-.2 15.13 15.13 0 0 1-3.89 1.65 1.33 1.33 0 0 0-1 1.28v2.68a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.68a1.34 1.34 0 0 0-1-1.28 15.13 15.13 0 0 1-3.89-1.65 1.26 1.26 0 0 0-.67-.19 1.31 1.31 0 0 0-.94.39l-1.93 1.93a2 2 0 0 1-2.87 0l-1.4-1.4a2 2 0 0 1 0-2.87l2-2a1.33 1.33 0 0 0 .28-1.57 15.45 15.45 0 0 1-1.54-3.82 1.33 1.33 0 0 0-1.28-1h-2.89a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2.89a1.33 1.33 0 0 0 1.28-1 15.45 15.45 0 0 1 1.54-3.82 1.33 1.33 0 0 0-.22-1.59l-2-2a2.05 2.05 0 0 1-.59-1.44 2 2 0 0 1 .59-1.43l1.4-1.4a2 2 0 0 1 2.86-.04Zm30 69v2.8H29.55v-2.8a1 1 0 0 1 1-1h34.78a1 1 0 0 1 .96.98Zm-13.92-3.6h-8.9v-9h8.9ZM86.8 68.31a2.9 2.9 0 0 1-2.9 2.9h-72a2.9 2.9 0 0 1-2.9-2.9V24.69a2.9 2.9 0 0 1 2.91-2.9H29.1a4.43 4.43 0 0 0 1.1 1.8l1.32 1.32a18.06 18.06 0 0 0-1 2.58h-1.9A4.65 4.65 0 0 0 24 31.83h-6.69A1.32 1.32 0 0 0 16 33.15v11a5 5 0 1 0 2.64 0v-9.68H24a4.65 4.65 0 0 0 4.63 4.33h1.9a18.06 18.06 0 0 0 1 2.58L30.2 42.7a4.67 4.67 0 0 0 0 6.6l1.4 1.4a4.67 4.67 0 0 0 6.6 0l1.22-1.22a18.59 18.59 0 0 0 2.68 1.14v11.7h-9a5 5 0 1 0 0 2.64h10.32a1.33 1.33 0 0 0 1.32-1.32V56.5a4.55 4.55 0 0 0 2 .48h2a4.6 4.6 0 0 0 2-.48v7.14A1.32 1.32 0 0 0 52.09 65h10.29a5 5 0 1 0 0-2.64h-9V50.62a18.59 18.59 0 0 0 2.68-1.14l1.22 1.22a4.67 4.67 0 0 0 6.6 0l1.4-1.4a4.67 4.67 0 0 0 0-6.6L64 41.38a18.06 18.06 0 0 0 1-2.58h1.89a4.66 4.66 0 0 0 4.64-4.33h5.32v9.72a5 5 0 1 0 2.64 0v-11a1.32 1.32 0 0 0-1.32-1.32h-6.61a4.66 4.66 0 0 0-4.64-4.34H65a18.06 18.06 0 0 0-1-2.58l1.32-1.32a4.43 4.43 0 0 0 1.1-1.8H83.9a2.9 2.9 0 0 1 2.9 2.9ZM17.31 46.63A2.35 2.35 0 1 1 15 49a2.35 2.35 0 0 1 2.31-2.37ZM28.34 66a2.35 2.35 0 1 1 2.35-2.35A2.35 2.35 0 0 1 28.34 66Zm36.48-2.35A2.35 2.35 0 1 1 67.16 66a2.34 2.34 0 0 1-2.34-2.36Zm13.38-17A2.35 2.35 0 1 1 75.85 49a2.34 2.34 0 0 1 2.35-2.37Zm-30.45.52a14 14 0 1 0-14-14 14 14 0 0 0 14 13.98Zm0-25.36a11.36 11.36 0 1 1-11.36 11.34 11.37 11.37 0 0 1 11.36-11.36ZM52 35.38 54.54 33 52 30.69a1.32 1.32 0 0 1 1.77-2l3.67 3.33a1.32 1.32 0 0 1 0 1.95l-3.67 3.32a1.32 1.32 0 0 1-.89.35 1.3 1.3 0 0 1-1-.44 1.31 1.31 0 0 1 .12-1.82Zm-7.14.32 3.58-6.2a1.32 1.32 0 0 1 2.29 1.32L47.11 37a1.32 1.32 0 0 1-1.81.48 1.32 1.32 0 0 1-.48-1.78Zm-7.14-2.44a1.35 1.35 0 0 1 .43-1L41.78 29a1.32 1.32 0 0 1 1.77 1.95L41 33.26l2.59 2.34a1.33 1.33 0 0 1 .09 1.87 1.32 1.32 0 0 1-1.86.09l-3.67-3.32a1.35 1.35 0 0 1-.47-.98Z" />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Software Engineering</h4>
    </motion.div>
  );
}

export function AutIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 80"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path
          d="M20.585 62a2.401 2.401 0 0 1-.51-.055l-5.76-1.247a2.399 2.399 0 0 1-1.838-2.853l.553-2.543a.393.393 0 0 0-.163-.408.428.428 0 0 0-.497-.044l-2.191 1.407a2.405 2.405 0 0 1-3.318-.719L3.67 50.59a2.397 2.397 0 0 1 .72-3.317l2.192-1.407a.393.393 0 0 0 .176-.402.425.425 0 0 0-.32-.381l-2.546-.552a2.398 2.398 0 0 1-1.838-2.852L3.3 35.95a2.4 2.4 0 0 1 2.892-1.827l2.523.589a.4.4 0 0 0 .434-.18.45.45 0 0 0 .041-.502l-1.436-2.227a2.399 2.399 0 0 1 .72-3.318l4.957-3.183a2.408 2.408 0 0 1 3.318.718l1.41 2.188a.401.401 0 0 0 .407.178.428.428 0 0 0 .382-.319l.553-2.543a2.402 2.402 0 0 1 2.855-1.835l5.76 1.247a2.4 2.4 0 0 1 1.84 2.854l-.541 2.487a.394.394 0 0 0 .18.422l.1.058a.4.4 0 0 0 .421-.007l2.137-1.373a2.408 2.408 0 0 1 3.318.72l3.19 4.947v.001a2.397 2.397 0 0 1-.721 3.316l-2.14 1.375a.392.392 0 0 0-.172.43.42.42 0 0 0 .307.328l2.547.596a2.41 2.41 0 0 1 1.8 2.844l-1.254 5.773a2.4 2.4 0 0 1-2.857 1.835l-2.545-.55a.396.396 0 0 0-.415.162.422.422 0 0 0-.042.492l1.41 2.186a2.397 2.397 0 0 1-.721 3.316l-4.957 3.185a2.409 2.409 0 0 1-3.318-.72l-1.44-2.232a.396.396 0 0 0-.434-.172.412.412 0 0 0-.314.308l-.564 2.592A2.405 2.405 0 0 1 20.585 62Zm-7.998-9.216a2.465 2.465 0 0 1 2.397 2.943l-.553 2.543a.395.395 0 0 0 .055.298.4.4 0 0 0 .253.175l5.76 1.247a.4.4 0 0 0 .478-.304l.563-2.594a2.392 2.392 0 0 1 1.744-1.813c.029-.008.076-.018.106-.023a2.358 2.358 0 0 1 2.534 1.04l1.44 2.233a.4.4 0 0 0 .556.12l4.956-3.183a.397.397 0 0 0 .122-.55l-1.411-2.188a2.386 2.386 0 0 1 .047-2.666 2.424 2.424 0 0 1 2.514-1.026l2.546.55a.4.4 0 0 0 .479-.304l1.255-5.773a.4.4 0 0 0-.301-.472l-2.548-.596a2.425 2.425 0 0 1-.76-4.387l2.141-1.376a.393.393 0 0 0 .174-.25.398.398 0 0 0-.054-.301l-3.19-4.946a.404.404 0 0 0-.555-.121l-2.137 1.373a2.391 2.391 0 0 1-2.524.044 2.417 2.417 0 0 1-1.214-2.626l.541-2.486a.4.4 0 0 0-.308-.474l-5.76-1.247a.396.396 0 0 0-.478.305l-.553 2.543a2.447 2.447 0 0 1-4.423.8l-1.41-2.188a.401.401 0 0 0-.557-.119L9.555 30.17a.398.398 0 0 0-.12.55l1.437 2.228a2.385 2.385 0 0 1 .046 2.524 2.413 2.413 0 0 1-2.656 1.188l-2.524-.589a.406.406 0 0 0-.307.052.396.396 0 0 0-.177.253l-1.245 5.728a.398.398 0 0 0 .306.473l2.548.552a2.443 2.443 0 0 1 .8 4.42l-2.19 1.408a.398.398 0 0 0-.12.55l3.189 4.948a.4.4 0 0 0 .556.12l2.191-1.407a2.395 2.395 0 0 1 1.298-.383Z"
          data-name="Group"
        />
        <path d="m14.134 43 3.043-1.252-.638-1.9L11 42.198v1.604l5.538 2.35.64-1.895L14.134 43zM21.926 37.225l-4.035 11.55h2.206l4.01-11.55h-2.181zM25.461 39.848l-.638 1.9L27.866 43l-3.044 1.257.64 1.895L31 43.802v-1.604l-5.539-2.35z" />
        <path
          d="M47.99 29.094a1.954 1.954 0 0 1-.415-.044l-3.976-.862a1.966 1.966 0 0 1-1.506-2.337l.382-1.755-1.497.986a1.97 1.97 0 0 1-2.718-.589l-2.201-3.414a1.964 1.964 0 0 1 .59-2.718l1.513-.971-1.754-.357a1.965 1.965 0 0 1-1.507-2.338l.859-3.952a1.967 1.967 0 0 1 2.37-1.497l1.741.406-.995-1.538a1.964 1.964 0 0 1 .59-2.718L42.889 3.2a1.972 1.972 0 0 1 2.717.591l.973 1.508.361-1.75a1.978 1.978 0 0 1 2.34-1.503l3.976.86a1.967 1.967 0 0 1 1.505 2.338l-.372 1.716 1.488-.947a1.973 1.973 0 0 1 2.717.589l2.201 3.415a1.966 1.966 0 0 1-.588 2.716l-1.48.95 1.754.37a1.972 1.972 0 0 1 1.474 2.332l-.864 3.982a1.973 1.973 0 0 1-2.34 1.505l-1.757-.38.984 1.488a1.964 1.964 0 0 1-.591 2.718l-3.42 2.198a1.971 1.971 0 0 1-2.718-.59l-.98-1.52a.937.937 0 0 1-.044.01l-.31 1.75a1.972 1.972 0 0 1-1.924 1.549Zm-5.517-6.979a2.012 2.012 0 0 1 1.957 2.406l-.382 1.755 3.95.819.35-1.764a1.978 1.978 0 0 1 3.588-.65l.994 1.54 3.375-2.207-.983-1.46a1.998 1.998 0 0 1 2.095-3.019l1.757.381.826-3.957-1.732-.37a1.984 1.984 0 0 1-.622-3.59l1.448-.93-2.183-3.384-1.43.958a2.022 2.022 0 0 1-3.047-2.11l.37-1.714L48.856 4l-.341 1.727a2 2 0 0 1-3.617.656l-.973-1.51-3.377 2.207 1.002 1.488a1.954 1.954 0 0 1 .037 2.069 1.974 1.974 0 0 1-2.169.963l-1.741-.407-.82 3.926 1.73.339a1.997 1.997 0 0 1 .657 3.614l-1.514.973 2.212 3.364 1.468-.981a1.968 1.968 0 0 1 1.064-.313ZM59.124 11.05Z"
          data-name="Group"
        />
        <path d="m43.33 15.547 2.26-.93-.474-1.41-4.112 1.745v1.191l4.112 1.744.475-1.407-2.261-.933zM49.116 11.26l-2.996 8.575h1.637l2.978-8.575h-1.619zM51.74 13.207l-.474 1.41 2.26.93-2.26.933.475 1.407 4.112-1.744v-1.191l-4.113-1.745z" />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Automation</h4>
    </motion.div>
  );
}

export function CVIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          enableBackground: "new 0 0 100 100",
        }}
        viewBox="0 0 100 125"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path d="M56.04 43.2H43.96a.76.76 0 0 0-.76.76v12.08c0 .42.34.76.76.76h12.08c.42 0 .76-.34.76-.76V43.96a.76.76 0 0 0-.76-.76zm-.76 12.08H44.72V44.72h10.57v10.56z" />
        <path d="M40.6 41.36v17.28c0 .42.34.76.76.76h17.28c.42 0 .76-.34.76-.76V41.36a.76.76 0 0 0-.76-.76H41.36a.76.76 0 0 0-.76.76zm1.52.76h15.76v15.76H42.12V42.12zM43.22 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c0 .42.34.76.76.76zM45.93 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c0 .42.34.76.76.76zM48.64 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c.01.42.35.76.76.76zM51.36 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c0 .42.34.76.76.76zM54.07 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c0 .42.34.76.76.76zM56.78 39.64c.42 0 .76-.34.76-.76v-2.1a.76.76 0 1 0-1.52 0v2.1c.01.42.34.76.76.76zM43.22 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.766.766 0 0 0-.76-.76zM45.93 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.76.76 0 0 0-.76-.76zM48.64 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.76.76 0 0 0-.76-.76zM51.36 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.773.773 0 0 0-.76-.76zM54.07 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.76.76 0 0 0-.76-.76zM56.78 60.36a.76.76 0 0 0-.76.76v2.1a.76.76 0 1 0 1.52 0v-2.1a.76.76 0 0 0-.76-.76zM61.12 43.97h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM61.12 46.69h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM61.12 49.4h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM61.12 52.11h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM61.12 54.83h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM61.12 57.54h2.1a.76.76 0 1 0 0-1.52h-2.1a.76.76 0 1 0 0 1.52zM38.88 42.46h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52zM38.88 45.17h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52zM38.88 47.89h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52zM38.88 50.6h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52zM38.88 53.31h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52zM38.88 56.03h-2.1a.76.76 0 1 0 0 1.52h2.1a.76.76 0 1 0 0-1.52z" />
        <path d="M81.95 37.54h.03c.01 0 .03 0 .04-.01.01 0 .02-.01.04-.01.01 0 .02-.01.03-.01.01 0 .02-.01.04-.01.01 0 .02-.01.03-.01.01 0 .02-.01.03-.02.01-.01.02-.01.03-.02.01-.01.02-.01.03-.02.01-.01.02-.01.03-.02.01-.01.02-.02.03-.02.01-.01.02-.01.03-.02.02-.02.04-.03.06-.05l6.71-6.71c.31.15.66.24 1.04.24 1.3 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35c0 .37.09.72.24 1.04l-6.49 6.49h-9.92a47.587 47.587 0 0 0-11.76-4.15v-7l7.5-7.5c.31.15.66.24 1.04.24 1.3 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35c0 .37.09.72.24 1.04l-7.72 7.72c-.02.02-.03.04-.05.06-.01.01-.01.02-.02.03-.01.01-.02.02-.02.03-.01.01-.01.02-.02.03-.01.01-.01.02-.02.03-.01.01-.01.02-.02.03-.01.01-.01.02-.02.03 0 .01-.01.02-.01.03 0 .01-.01.02-.01.04 0 .01-.01.02-.01.04 0 .01-.01.02-.01.04 0 .01 0 .03-.01.04v7.13c-2.5-.44-5.04-.68-7.61-.72V17.51a2.347 2.347 0 0 0-.76-4.57 2.347 2.347 0 0 0-.76 4.57v13.36c-2.57.04-5.11.28-7.61.72v-7.12c0-.01 0-.03-.01-.04 0-.01-.01-.03-.01-.04 0-.01-.01-.02-.01-.03 0-.01-.01-.02-.01-.04 0-.01-.01-.02-.01-.03 0-.01-.01-.02-.02-.03-.01-.01-.01-.02-.02-.03-.01-.01-.01-.02-.02-.03-.01-.01-.01-.02-.02-.03-.01-.01-.02-.02-.02-.03-.01-.01-.01-.02-.02-.03-.02-.02-.03-.04-.05-.06l-7.72-7.72c.15-.31.24-.66.24-1.04 0-1.3-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35c.37 0 .72-.09 1.04-.24l7.5 7.5v7c-2.76.58-5.46 1.41-8.1 2.48-1.25.51-2.47 1.06-3.66 1.67h-9.92l-6.49-6.49c.15-.31.24-.66.24-1.04 0-1.3-1.05-2.35-2.35-2.35S7.5 27.21 7.5 28.5c0 1.3 1.05 2.35 2.35 2.35.37 0 .72-.09 1.04-.24l6.71 6.71c.02.02.04.03.06.05.01.01.02.01.03.02.01.01.02.02.03.02.01.01.02.01.03.02.01.01.02.01.03.02.01.01.02.01.03.02.01.01.02.01.03.02.01 0 .02.01.03.01.01 0 .02.01.04.01.01 0 .02.01.03.01.01 0 .02.01.04.01.01 0 .03 0 .04.01h7.58c-3.4 2.02-6.55 4.47-9.4 7.32l-3.72 3.72c-.78.78-.78 2.06 0 2.84l3.72 3.72c2.85 2.85 5.99 5.3 9.4 7.32H18.04c-.01 0-.02 0-.04.01-.01 0-.02 0-.04.01-.01 0-.03.01-.04.01-.01 0-.02.01-.03.01-.01 0-.03.01-.04.01-.01 0-.02.01-.03.01-.01 0-.02.01-.03.02-.01.01-.02.01-.03.02-.01.01-.02.01-.03.02-.01.01-.02.01-.03.02-.01.01-.02.02-.03.02-.01.01-.02.01-.03.02-.02.02-.04.03-.06.05l-6.71 6.71c-.31-.15-.66-.24-1.04-.24-1.3 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35 2.35-1.05 2.35-2.35c0-.37-.09-.72-.24-1.04l6.49-6.49h9.92a47.587 47.587 0 0 0 11.76 4.15v7l-7.5 7.5c-.31-.15-.66-.24-1.04-.24-1.3 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35 2.35-1.05 2.35-2.35c0-.37-.09-.72-.24-1.04l7.72-7.72c.02-.02.03-.04.05-.06.01-.01.01-.02.02-.03.01-.01.02-.02.02-.03.01-.01.01-.02.02-.03.01-.01.01-.02.02-.03.01-.01.01-.02.02-.03.01-.01.01-.02.02-.03 0-.01.01-.02.01-.03 0-.01.01-.02.01-.04 0-.01.01-.02.01-.03 0-.01.01-.03.01-.04 0-.01 0-.03.01-.04V68.44c2.5.44 5.04.68 7.61.72v13.36a2.347 2.347 0 0 0 .76 4.57 2.347 2.347 0 0 0 .76-4.57V69.13c2.57-.04 5.11-.28 7.61-.72v7.13c0 .01 0 .03.01.04 0 .01.01.02.01.04 0 .01.01.02.01.04 0 .01.01.02.01.04 0 .01.01.02.01.03 0 .01.01.02.02.03.01.01.01.02.02.03.01.01.01.02.02.03.01.01.01.02.02.03.01.01.02.02.02.03.01.01.01.02.02.03.02.02.03.04.05.06l7.72 7.72c-.15.31-.24.66-.24 1.04 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35-1.05-2.35-2.35-2.35c-.37 0-.72.09-1.04.24l-7.5-7.5v-7c2.76-.58 5.46-1.41 8.1-2.48 1.25-.51 2.47-1.06 3.66-1.67h9.92l6.49 6.49c-.15.31-.24.66-.24 1.04 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35-1.05-2.35-2.35-2.35c-.37 0-.72.09-1.04.24l-6.71-6.71c-.02-.02-.04-.03-.06-.05-.01-.01-.02-.01-.03-.02-.01-.01-.02-.02-.03-.02-.01-.01-.02-.01-.03-.02-.01-.01-.02-.01-.03-.02-.01-.01-.02-.01-.03-.02-.01-.01-.02-.01-.03-.02-.01 0-.02-.01-.03-.01-.01 0-.02-.01-.04-.01-.01 0-.02-.01-.03-.01-.01 0-.03-.01-.04-.01-.01 0-.02 0-.04-.01-.01 0-.02 0-.04-.01H74.4c3.4-2.02 6.55-4.47 9.4-7.32l3.72-3.72c.38-.38.59-.88.59-1.42s-.21-1.04-.59-1.42l-3.72-3.72c-2.85-2.85-5.99-5.3-9.4-7.32h7.48c.02.01.04.01.07.01zm.77 8.39 3.72 3.72a.5.5 0 0 1 .14.35.5.5 0 0 1-.14.35l-3.72 3.72C73.98 62.81 62.36 67.63 50 67.63s-23.98-4.81-32.72-13.55l-3.72-3.72a.501.501 0 0 1 0-.7l3.72-3.72C26.02 37.19 37.64 32.37 50 32.37s23.98 4.82 32.72 13.56z" />
        <circle cx={50} cy={50} r={2.35} />
        <path d="M26.83 46.07c-2.16 0-3.93 1.76-3.93 3.93 0 2.16 1.76 3.93 3.93 3.93 2.16 0 3.93-1.76 3.93-3.93-.01-2.16-1.77-3.93-3.93-3.93zM73.17 53.93c2.16 0 3.93-1.76 3.93-3.93 0-2.16-1.76-3.93-3.93-3.93s-3.93 1.76-3.93 3.93c.01 2.16 1.77 3.93 3.93 3.93z" />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Computer Vision</h4>
    </motion.div>
  );
}

export function AIIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path d="M53.968 60.61v3.375c0 .562.447 1.018 1 1.018s1-.456 1-1.018V60.61h2.363c1.497 0 2.716-1.241 2.716-2.766v-2.401h3.314c.553 0 1-.456 1-1.018s-.447-1.018-1-1.018h-3.314v-2.296h3.314c.553 0 1-.456 1-1.018s-.447-1.018-1-1.018h-3.314V46.78h3.314c.553 0 1-.456 1-1.018s-.447-1.018-1-1.018h-3.314v-2.279c0-1.525-1.219-2.766-2.716-2.766h-2.363v-3.375c0-.562-.447-1.018-1-1.018s-1 .456-1 1.018V39.7h-2.255v-3.375c0-.562-.447-1.018-1-1.018s-1 .456-1 1.018V39.7h-2.254v-3.375c0-.562-.447-1.018-1-1.018s-1 .456-1 1.018V39.7h-2.362c-1.498 0-2.717 1.241-2.717 2.766v2.836h-3.314c-.553 0-1 .456-1 1.018s.447 1.018 1 1.018h3.314v2.294h-3.314c-.553 0-1 .456-1 1.018s.447 1.018 1 1.018h3.314v2.296h-3.314c-.553 0-1 .456-1 1.018s.447 1.018 1 1.018h3.314v1.843c0 1.525 1.219 2.766 2.717 2.766h2.362v3.375c0 .562.447 1.018 1 1.018s1-.456 1-1.018V60.61h2.254v3.375c0 .562.447 1.018 1 1.018s1-.456 1-1.018V60.61h2.255zM42.38 57.844V42.465c0-.402.321-.73.717-.73h15.234c.395 0 .716.328.716.73v15.379c0 .402-.321.73-.716.73H43.097a.724.724 0 0 1-.717-.73z" />
        <path d="M57.428 56.082V44.447c0-.562-.447-1.018-1-1.018H44.999c-.553 0-1 .456-1 1.018v11.635c0 .562.447 1.018 1 1.018h11.429c.552 0 1-.456 1-1.018zm-2-1.019h-9.429v-9.599h9.429v9.599z" />
        <path d="m90.651 64.883-.009-12.552c0-.562-.448-1.017-1-1.017h-5.636a9.557 9.557 0 0 0 .146-1.652c0-.047-.005-.094-.006-.141 0-.01.006-.019.006-.03 0-3.709-2.189-6.885-5.278-8.19a8.152 8.152 0 0 0-1.556-.521c1.41-1.639 2.207-3.773 2.207-6.064 0-.611-.06-1.208-.17-1.786h6.328c.553 0 1-.456 1-1.018V18.167a3.973 3.973 0 0 0 2.924-3.823c.008-2.195-1.741-3.989-3.911-3.999-2.149 0-3.906 1.78-3.915 3.969a3.968 3.968 0 0 0 2.902 3.847v12.732h-5.971c-1.04-2.344-2.997-4.146-5.39-4.886l-.012-7.688a3.972 3.972 0 0 0 2.925-3.822c.008-2.196-1.741-3.991-3.912-4-2.15 0-3.905 1.781-3.913 3.969a3.985 3.985 0 0 0 1.134 2.82 3.849 3.849 0 0 0 1.767 1.027l.012 7.343c-.144-.007-.285-.023-.431-.023a8.06 8.06 0 0 0-1.562.159c-.305-4.58-3.936-8.212-8.366-8.212-.024 0-.046.013-.069.014-.096-.003-.189-.014-.285-.014-4.6 0-8.634 4.521-8.634 9.675v5.614c0 .562.447 1.018 1 1.018s1-.456 1-1.018v-5.614c0-4.07 3.1-7.639 6.634-7.639 3.658 0 6.635 3.16 6.635 7.044 0 .113-.009.224-.016.334l-.008.106c-.009.13.015.255.053.375-.483 3.239-3.125 5.727-6.31 5.727-.553 0-1 .456-1 1.018s.447 1.018 1 1.018c4.137 0 7.576-3.165 8.264-7.311.551-.154 1.106-.259 1.665-.259 3.657 0 6.633 3.161 6.633 7.045 0 2.507-1.219 4.771-3.261 6.055-.021.013-.034.034-.054.049-3.894.766-6.851 4.359-6.851 8.671 0 .562.447 1.018 1 1.018s1-.456 1-1.018c0-3.745 2.869-6.792 6.396-6.792.843 0 1.646.178 2.382.494 2.358 1.082 4.014 3.574 4.014 6.47 0 3.883-2.976 7.043-6.634 7.043a6 6 0 0 1-.523-.028c-.452-.049-.884.241-1.033.685a1.03 1.03 0 0 0 .405 1.185c1.927 1.263 3.088 3.423 3.146 5.804-.02.08-.048.157-.048.244 0 3.747-2.87 6.794-6.397 6.794-3.526 0-6.395-3.048-6.395-6.794 0-.562-.447-1.018-1-1.018s-1 .456-1 1.018c0 3.299 1.731 6.177 4.286 7.692.049.166.094.308.134.429.118.365.15.463.15.932 0 3.884-2.977 7.045-6.635 7.045s-6.634-3.161-6.634-7.045c0-.053-.021-.098-.029-.148.008-.05.029-.095.029-.148v-5.36c0-.562-.447-1.018-1-1.018s-1 .456-1 1.018v5.36c0 .053.021.098.029.148-.008.05-.029.095-.029.148 0 4.351 2.926 7.993 6.815 8.875v3.324c0 .562.447 1.018.999 1.018l15.422.01c.45 1.696 1.963 2.956 3.767 2.956h.013c2.157-.01 3.906-1.804 3.898-4-.009-2.188-1.765-3.967-3.928-3.967-1.808.008-3.314 1.275-3.755 2.976l-14.416-.01v-2.11c4.677-.103 8.453-4.128 8.453-9.071l-.002-.195a8.26 8.26 0 0 0 1.65.165c4.76 0 8.633-4.072 8.633-9.079 0-2.256-.78-4.373-2.161-6.007 2.704-.622 4.935-2.582 6.039-5.182h5.24l.008 11.524a3.97 3.97 0 0 0-2.922 3.821c-.008 2.196 1.74 3.991 3.896 4h.015c2.149 0 3.906-1.781 3.915-3.971a3.958 3.958 0 0 0-2.902-3.84zm-6.87-50.56c.005-1.07.863-1.941 1.92-1.941 1.055.004 1.91.882 1.906 1.955-.005 1.07-.862 1.94-1.913 1.94v.387l-.004-.001-.003-.386c-1.054-.005-1.91-.881-1.906-1.954zm-13.37.151c.004-1.07.862-1.941 1.918-1.941 1.056.004 1.911.882 1.907 1.956-.005 1.069-.863 1.939-1.915 1.939v.002l-.007-.001v-.001a1.883 1.883 0 0 1-1.35-.575 1.954 1.954 0 0 1-.553-1.379zm8.566 69.423c1.051 0 1.908.871 1.913 1.939.004 1.074-.852 1.952-1.905 1.956l-.006 1.018v-1.018c-1.052 0-1.91-.871-1.915-1.94-.004-1.073.851-1.95 1.913-1.955zm10.664-13.238v1.018l-.007-1.018c-1.054-.004-1.908-.882-1.904-1.956.005-1.069.861-1.938 1.919-1.938 1.055.004 1.91.88 1.907 1.952-.005 1.071-.864 1.942-1.915 1.942zM49.354 66.945c-.553 0-1 .456-1 1.018v5.36c0 .052.021.098.029.148-.008.05-.029.096-.029.148 0 3.884-2.976 7.045-6.634 7.045s-6.635-3.161-6.635-7.045c0-.468.032-.566.15-.932.04-.121.085-.263.134-.429 2.555-1.516 4.286-4.393 4.286-7.692 0-.562-.447-1.018-1-1.018s-1 .456-1 1.018c0 3.747-2.868 6.794-6.395 6.794-3.527 0-6.397-3.048-6.397-6.794 0-.086-.028-.164-.048-.244.059-2.381 1.22-4.541 3.146-5.804.387-.253.554-.742.405-1.185a.998.998 0 0 0-1.033-.685 6.043 6.043 0 0 1-.523.028c-3.658 0-6.634-3.16-6.634-7.043 0-2.896 1.655-5.388 4.014-6.47a6.04 6.04 0 0 1 2.382-.494c3.527 0 6.396 3.047 6.396 6.792 0 .562.447 1.018 1 1.018s1-.456 1-1.018c0-4.312-2.958-7.906-6.851-8.672-.02-.014-.033-.035-.054-.048-2.042-1.285-3.261-3.548-3.261-6.055 0-3.884 2.976-7.045 6.633-7.045.559 0 1.114.105 1.665.259.688 4.146 4.127 7.311 8.264 7.311.553 0 1-.456 1-1.018s-.447-1.018-1-1.018c-3.186 0-5.826-2.487-6.31-5.727.038-.12.062-.245.053-.375l-.008-.106c-.007-.11-.016-.221-.016-.334 0-3.884 2.977-7.044 6.635-7.044 3.534 0 6.634 3.569 6.634 7.639v5.614c0 .562.447 1.018 1 1.018s1-.456 1-1.018v-5.614c0-4.46-3.021-8.439-6.815-9.433v-3.724c0-.562-.447-1.018-.999-1.018l-11.423-.01c-.45-1.696-1.964-2.956-3.778-2.956-2.157.009-3.906 1.803-3.898 4 .009 2.188 1.765 3.967 3.913 3.967h.015c1.808-.008 3.314-1.275 3.755-2.976l10.416.009v2.474c-.034 0-.068.004-.104.005-.024-.001-.045-.014-.069-.014-4.431 0-8.062 3.632-8.366 8.212a7.991 7.991 0 0 0-1.562-.159c-4.76 0-8.633 4.074-8.633 9.081 0 .208.014.415.027.62h-8.015V23.978a3.968 3.968 0 0 0 2.902-3.848c-.009-2.188-1.766-3.968-3.928-3.968-2.157.01-3.906 1.804-3.898 4a3.971 3.971 0 0 0 2.924 3.822v12.341c0 .562.447 1.018 1 1.018h9.365a9.068 9.068 0 0 0 1.829 3.408 8.202 8.202 0 0 0-1.552.519c-3.091 1.304-5.282 4.481-5.282 8.192 0 .011.006.02.006.03-.001.047-.006.094-.006.141 0 .314.02.624.05.931h-2.067c-.401-1.758-1.941-3.079-3.801-3.087-2.149 0-3.906 1.78-3.915 3.971-.007 2.195 1.743 3.988 3.899 3.996h.017c1.762 0 3.242-1.205 3.728-2.843h2.567c.976 2.957 3.361 5.225 6.311 5.903-1.381 1.634-2.161 3.751-2.161 6.007 0 5.006 3.873 9.079 8.633 9.079.559 0 1.11-.055 1.65-.165a11.82 11.82 0 0 0-.002.195c0 .213.017.422.03.631l-6.387-.004c-.013 0-.023-.007-.036-.007s-.023.007-.036.007l-10.042-.007c-.45-1.694-1.963-2.952-3.777-2.952-2.156.008-3.906 1.8-3.899 3.997.009 2.188 1.766 3.969 3.915 3.969h.015c1.808-.008 3.312-1.276 3.753-2.978l9.072.006v5.865a3.973 3.973 0 0 0-3.032 3.855c-.008 2.196 1.741 3.991 3.9 4h.012c2.15 0 3.905-1.781 3.913-3.969a3.985 3.985 0 0 0-1.134-2.82 3.861 3.861 0 0 0-1.659-.993v-5.937l5.774.004c1.086 3.709 4.375 6.413 8.253 6.413 4.761 0 8.634-4.074 8.634-9.081 0-.052-.021-.098-.029-.148.008-.05.029-.096.029-.148v-5.36a1.01 1.01 0 0 0-1-1.018zM27.359 16.019l-.007 1.018v-1.018c-1.051 0-1.908-.87-1.913-1.939-.004-1.074.852-1.952 1.911-1.956 1.052 0 1.91.871 1.915 1.94.005 1.074-.851 1.951-1.906 1.955zm-15.466 4.135c-.004-1.074.852-1.952 1.911-1.956 1.052 0 1.91.871 1.915 1.94.004 1.074-.852 1.951-1.906 1.955v.001l-.007.001v-.002c-1.051.001-1.909-.87-1.913-1.939zm.466 33.253v1.018l-.009-1.018c-1.055-.004-1.91-.88-1.907-1.952.005-1.071.863-1.942 1.922-1.942 1.054.004 1.908.882 1.904 1.956-.004 1.069-.861 1.938-1.91 1.938zm16.126 32.618c-.004 1.07-.862 1.941-1.913 1.941v1.018l-.005-1.018c-1.056-.004-1.911-.882-1.907-1.956.005-1.069.863-1.939 1.922-1.939.511.002.99.206 1.35.575.359.369.555.858.553 1.379zm-15.626-8.808-.007 1.018v-1.018c-1.052 0-1.91-.872-1.915-1.94-.003-1.073.853-1.95 1.916-1.954 1.049 0 1.905.869 1.91 1.937.005 1.074-.85 1.952-1.904 1.957z" />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Artificial Intelligence</h4>
    </motion.div>
  );
}

export function DSIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "currentColor",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 640"
        className={`w-24 h-24 ${className}`}
        {...rest}
      >
        <path
          d="M214.711 390.275c6.583 0 6.583 10 0 10H16.01a5 5 0 0 1-5-5V25.005c0-6.583 10-6.583 10 0v12.709h24.139c6.583 0 6.583 10 0 10H21.01v21.5h13.636c6.583 0 6.583 10 0 10H21.01v21.5h24.139c6.583 0 6.583 10 0 10H21.01v21.5h13.636c6.583 0 6.583 10 0 10H21.01v21.5h24.139c6.583 0 6.583 10 0 10H21.01v21.5h13.636c6.583 0 6.583 10 0 10H21.01v21.5h24.139c6.583 0 6.583 10 0 10H21.01v21.5h13.636c6.583 0 6.583 10 0 10H21.01v21.5h24.139c6.583 0 6.583 10 0 10H21.01v21.5h13.636c6.583 0 6.583 10 0 10H21.01v21.5h24.139c6.583 0 6.583 10 0 10H21.01v27.561h193.701zm250.87-111.939c29.585 26.275 42.212 67.053 31.814 105.914a4.993 4.993 0 0 1-6.113 3.535l-96.767-25.929c-3.462-.926-5.136-5.316-2.203-8.394l66.237-74.697a4.983 4.983 0 0 1 7.032-.429zm21.429 51.414a95.692 95.692 0 0 0-24.396-40.552l-57.725 65.098 84.028 22.515a94.66 94.66 0 0 0-1.907-47.061zm-150.216 43.062-83.545-58.964c-21.982 34.419-22.884 78.239-2.549 113.458l-.008.005 4.183 6.681 81.919-61.18zm-77.792-67.12 85.526 60.362 69.444-78.313c-11.863-9.597-25.632-16.575-40.41-20.534-8.954-2.399-14.647-3.019-23.45-3.64-20.354-1.179-41.93 4.429-59.446 14.542-12.145 7.013-23.023 16.459-31.664 27.583zm87.341 72.46L260.85 442c33.879 41.342 92.807 51.99 139.047 25.293 22.864-13.201 40.971-34.643 49.487-61.531l-103.041-27.61zm-96.308 66.193c15.453 20.579 37.643 36.326 64.409 43.498 63.583 17.037 128.984-20.736 145.99-84.294a4.993 4.993 0 0 0-3.535-6.113l-102.524-27.471 70.434-79.429a4.981 4.981 0 0 0-.43-7.031c-8.6-7.623-18.106-13.909-28.623-18.814V130.473a5 5 0 0 0-5-5h-40.157a5 5 0 0 0-5 5v123.002c-6.8-.021-13.527.546-20.118 1.662v-58.951a5 5 0 0 0-5-5h-40.157a5 5 0 0 0-5 5v80.024a119.429 119.429 0 0 0-20.118 18.406V172.717a5 5 0 0 0-5-5H210.05a5 5 0 0 0-5 5v170.554a5 5 0 0 0 5 5h18.568c-6.242 29.68-.782 59.387 13.449 84.035l.008-.005c1.432 2.478 6.204 10.041 7.96 12.044zm-18.864-106.074a118.81 118.81 0 0 1 14.036-30.363V177.717H215.05V338.27h16.121v.001zm54.153-68.571v-68.515h30.157v56.092c-10.51 2.727-20.849 6.973-30.157 12.423zm70.275-15.772V135.473h30.157v125.098a120.222 120.222 0 0 0-30.157-6.643zm18.43-218.498c-13.634 0-22.793 13.917-17.59 26.383l-51.717 40.157c-8.169-6.159-19.732-4.744-26.204 3.158l-27.17-12.168c1.811-11.57-7.122-22.02-18.822-22.02-14.141 0-23.281 14.878-17.11 27.44l-46.678 40.973c-7.729-5.139-18.025-3.935-24.389 2.8l-37.78-14.326c.065-10.599-8.485-19.192-19.051-19.192-16.913 0-25.447 20.548-13.471 32.524 8.789 8.789 23.457 6.923 29.822-3.687l35.749 13.556c-2.676 11.885 6.35 23.254 18.587 23.254 14.141 0 23.281-14.879 17.11-27.441l46.678-40.973c8.159 5.425 19.093 3.746 25.28-3.813l27.17 12.168c-1.81 11.569 7.121 22.02 18.822 22.02 13.634 0 22.793-13.917 17.59-26.383l51.717-40.157c7.583 5.717 18.219 4.959 24.929-1.751 11.975-11.974 3.442-32.522-13.472-32.522zm6.401 12.651c3.535 3.535 3.535 9.268 0 12.802-5.687 5.686-15.453 1.641-15.453-6.401-.001-8.042 9.766-12.086 15.453-6.401zm-80.765 62.71c3.535 3.535 3.535 9.268 0 12.802-5.685 5.686-15.453 1.642-15.453-6.401 0-8.044 9.769-12.086 15.453-6.401zm-60.738-27.199c3.534 3.534 3.534 9.268 0 12.802-5.685 5.686-15.453 1.642-15.453-6.401s9.767-12.086 15.453-6.401zm-74.322 65.238c-5.686-5.686-15.453-1.641-15.453 6.401s9.767 12.087 15.453 6.401a9.053 9.053 0 0 0 0-12.802zm-70.686-27.542c-5.686-5.686-15.453-1.641-15.453 6.401s9.767 12.087 15.453 6.401c3.535-3.534 3.535-9.267 0-12.802zm45.856 117.878a5 5 0 0 0-5 5v99.105a5 5 0 0 0 5 5h40.157a5 5 0 0 0 5-5v-99.105a5 5 0 0 0-5-5h-40.157zm35.157 10h-30.157v89.105h30.157v-89.105zM69.5 208.396a5 5 0 0 0-5 5v129.875a5 5 0 0 0 5 5h40.157a5 5 0 0 0 5-5V213.396a5 5 0 0 0-5-5H69.5zm35.157 10H74.5v119.875h30.157V218.396z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
        />
      </svg>
      <h4 className="mb-5 text-lg font-semibold">Data Science</h4>
    </motion.div>
  );
}

export function EmailIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "#ffffff",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
        }}
        viewBox="19.64 53.07 294.03 227.19"
        className={`w-8 h-8 ${className}`}
        {...rest}
      >
        <path
          d="M43.3 53.07l246.72 0c13,0 23.64,10.64 23.64,23.65l0 2.83 -111.68 97.5c-10.17,8.88 -22.74,13.31 -35.33,13.31 -12.58,0 -25.16,-4.44 -35.33,-13.31l-111.68 -97.5 0 -2.83c0,-13.01 10.64,-23.65 23.64,-23.65zm270.37 46.3l0 157.25c0,13 -10.64,23.64 -23.64,23.64l-246.72 0c-13,0 -23.64,-10.64 -23.64,-23.64l0 -157.25 101.84 88.91c13.03,11.38 29.1,17.06 45.16,17.06 16.06,0 32.13,-5.69 45.16,-17.06l101.84 -88.91z"
        />
      </svg>
    </motion.div>
  );
}

export function GitHubIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "#ffffff",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className={`w-10 h-10 mt-2 ${className}`}
        {...rest}
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </motion.div>
  );
}

export function LinkedInIcon({ className, ...rest }) {
  return (
    <motion.div
      className="mx-auto w-fit"
      whileHover={{
        fill: "#8490ff",
        color: "#8490ff",
      }}
      initial={{
        fill: "#ffffff",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className={`w-10 h-10 ${className}`}
        {...rest}
      >
        <path d="M9 25H4V10h5v15zM6.501 8a2.5 2.5 0 1 1 0-5.001A2.5 2.5 0 0 1 6.5 8zM27 25h-4.807v-7.3c0-1.741-.033-3.98-2.499-3.98-2.503 0-2.888 1.896-2.888 3.854V25H12V9.989h4.614v2.051h.065c.642-1.18 2.211-2.424 4.551-2.424 4.87 0 5.77 3.109 5.77 7.151V25z" />
      </svg>
    </motion.div>
  );
}
