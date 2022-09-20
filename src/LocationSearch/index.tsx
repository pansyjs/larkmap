import { Select, Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import type { LocationSearchProps, LocationSearchOption } from './types';
import { CLS_PREFIX, GAO_DE_API_URL } from './constant';
import './index.less';
import { debounce } from 'lodash';

const { Option } = Select;

export const LocationSearch: React.FC<LocationSearchProps> = ({
  searchParams,
  showDistrict,
  showAddress,
  onSearchFinish,
  onChange,
  ...selectProps
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<LocationSearchOption[]>([]);

  useEffect(() => {
    onSearchFinish?.(options);
  }, [onSearchFinish, options]);

  const onSearch = debounce(async (searchText: string) => {
    if (!searchText) {
      setOptions([]);
      return;
    }
    setIsLoading(true);
    const keyWords = [...(searchParams.keywords ?? '').split('|'), searchText].filter((item) => !!item).join('|')

    let url = GAO_DE_API_URL + '?key=' + searchParams.key + '&keywords=' + keyWords
    if (searchParams.location) {
      url += ('&location=' + searchParams.location)
    }
    const res = await (await fetch(url)).json().finally(() => {
      setIsLoading(false);
    });
    setOptions(
      (res?.tips ?? []).filter(item => item.location && item.location.length).map((item) => {
        const [lon, lat] = item.location.split(',');
        item.longitude = +lon;
        item.latitude = +lat;
        return item;
      }),
    );
  }, 1000)

  const onLocationChange = useCallback(
    (name?: string) => {
      const targetOption = name && options.find((option) => option.name === name);
      onChange?.(name || undefined, targetOption || undefined);
    },
    [onChange, options],
  );

  return (
    <Select
      className={`${CLS_PREFIX}`}
      notFoundContent={isLoading ? <Spin size="small" /> : null}
      onSearch={onSearch}
      onChange={onLocationChange}
      {...selectProps}
    >
      {options.map((option) => {
        const tip = `${showDistrict ? option.district : ''}${showAddress ? option.address : ''}`;
        return (
          <Option key={option.id} value={option.name}>
            <div title={option.name} className={`${CLS_PREFIX}__option-name`}>
              {option.name}
            </div>
            {tip && (
              <div title={tip} className={`${CLS_PREFIX}__option-tip`}>
                {tip}
              </div>
            )}
          </Option>
        );
      })}
    </Select>
  );
};

LocationSearch.defaultProps = {
  placeholder: '请输入要搜索地名',
  showSearch: true,
  allowClear: true,
  suffixIcon: <SearchOutlined />,
  filterOption: false,
  defaultActiveFirstOption: false,
  showAddress: true,
  showDistrict: true,
};
