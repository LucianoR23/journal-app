import { Grid, ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = ({ images }) => {
    return (
        <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center"  >

            <ImageList sx={{ width: '100%', height: 500, display: { xs: 'none', sm: 'none', md: 'grid' } }} cols={4} rowHeight={300}>
                {images?.map((image) => (
                    <ImageListItem key={image}>
                        <img
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='Imagen de la nota'
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList sx={{ width: '100%', height: 200, display: { xs: 'grid', sm: 'grid', md: 'none' } }} cols={4} rowHeight={75}>
                {images?.map((image) => (
                    <ImageListItem key={image}>
                        <img
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='Imagen de la nota'
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>



        </Grid>  
        );
}