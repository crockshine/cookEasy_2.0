using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Ingredient : BaseType
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("measure_unit")]
        [Required]
        public string MeasureUnit { get; set; }

        [Column("value")]
        [Required]
        public decimal Value { get; set; }
    }
}
