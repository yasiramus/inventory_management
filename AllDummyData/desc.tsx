
  
  // console.log(binId, 'detail') 
  
	// const { data:details, error, isLoading:loadingData } = useSWR<any>(`${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/products/product/${DetailsPage}`, fetcher);

	// const { data:detail  } = useSWR<any>(`${process.env.NEXT_PUBLIC_BASEURL}/extension/inventory/product/${DetailsPage}`, fetcher);
  
  // const [details, setDetails] = useState<DetailsTable>({
  //   name: "" ,
  //   image_urls:[''],
  //   category: '',
  //   description: '',
  //   price: '',
  //   cost: '',
  //   size: '',
  //   is_fragile: '',
  //   currency_code: '',
  // });

  // const [loadingData, setLoadingData] = useState(false);

  // useEffect(() => {

  //   const fetchSingleDetails = async () => {
  //     setLoadingData(true)
  //     const singleDetailsData = await axios.get(
  //       `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/products/product/${DetailsPage}`
  //     );
  //     setDetails(singleDetailsData.data.responses);
  //     setLoadingData(false)
  //   };

  //   fetchSingleDetails();

  // }, []);