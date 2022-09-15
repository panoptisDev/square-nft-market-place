import React from "react";

import { makeId } from "../../utils/makeId";
import NFTCard from "./NFTCard";

const HotBids = () => {
	return (
		<div className='mt-10'>
			<div className='flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start'>
				<h1 className='flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4'>
					Hot BIds
				</h1>
				<div>SearchBar</div>
			</div>
			<div className='mt-3 w-full flex flex-wrap justify-start md:justify-center'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
					<NFTCard
						key={`NFT-${i}`}
						nft={{
							i,
							name: `Nifty NFT ${i}`,
							price: (10 - i * 0.534).toFixed(2),
							seller: `0x${makeId(3)}...${makeId(4)}`,
							owner: `0x${makeId(3)}...${makeId(4)}`,
							description: "Coll NFT on Sale",
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default HotBids;
