import 'bootstrap/dist/css/bootstrap.min.css';
import { library, dom } from "@fortawesome/fontawesome-svg-core";

import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faTty } from "@fortawesome/free-solid-svg-icons/faTty";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";


import './scripts/junk';



library.add(faHome, faAddressBook, faAddressCard, faTty, faCheck);



dom.watch();