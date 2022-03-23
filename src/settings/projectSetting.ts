import { CacheTypeEnum } from "@/enums/cacheEnum";
import type { ProjectConfig } from "@/types/config";

// Es necesario borrar la caché del navegador después de hacer cualquier cambio en la configuración
const setting: ProjectConfig = {
    // Permission-related cache is stored in sessionStorage or localStorage
    permissionCacheType: CacheTypeEnum.LOCAL,
};

export default setting;