import { ReactNode, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { getObjectMetadataItemsMock } from '@/object-metadata/utils/getObjectMetadataItemsMock';

export const JestObjectMetadataItemSetter = ({
  children,
}: {
  children: ReactNode;
}) => {
  const setObjectMetadataItems = useSetRecoilState(objectMetadataItemsState);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setObjectMetadataItems(getObjectMetadataItemsMock());
    setIsLoaded(true);
  }, [setObjectMetadataItems]);

  return isLoaded ? <>{children}</> : null;
};
