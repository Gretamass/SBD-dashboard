import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faChartLine,
    faCircleChevronLeft,
    faHouse,
    faPlus,
    faXmark,
    faChevronUp,
    faChartBar,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

export default (): void => {
    library.add(
        faChartLine,
        faCircleChevronLeft,
        faHouse,
        faPlus,
        faXmark,
        faChevronUp,
        faChartBar,
        faSearch
    );
};
