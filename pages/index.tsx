import { Button, Center } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	return (
		<div>
			<Center h='200px' color='white'>
				<Image
					src='https://megaplanit-prod.sfo3.cdn.digitaloceanspaces.com/Logo%20With%20White%20Background.jpg'
					alt='Logo'
					height='32px'
					width='320px'
				/>
			</Center>
			<Center>
				<Button
					size='lg'
					bg='#1f2733'
					color='#ffff'
					colorScheme='blackAlpha'
					px='160'
					onClick={() => router.push('/login')}
				>
					Log in
				</Button>
			</Center>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	return {
		redirect: {
			destination:
				'/admin/projects/2ed0e580-a27b-49ef-ab85-5dc14f73699e/targets',
			permanent: false,
		},
	};
};
